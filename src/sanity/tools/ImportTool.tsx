"use client";

/**
 * أداة «استيراد المحتوى»: تنقل نصوص الموقع وصوره الحالية إلى لوحة التحكم بنقرة واحدة.
 * - لا تلمس أي صفحة موجودة مسبقاً في اللوحة (آمنة للتكرار).
 * - الصور تُرفع من الموقع نفسه إلى مكتبة الصور في اللوحة.
 */
import { useCallback, useMemo, useState } from "react";
import { useClient } from "sanity";
import { Box, Button, Card, Flex, Heading, Stack, Text } from "@sanity/ui";
import { defaults, type DocId } from "@/content/defaults";
import { apiVersion } from "../env";
import { convertForSanity, countImages } from "./importLogic";

const PAGES: { id: DocId; title: string }[] = [
  { id: "settings", title: "معلومات الصالة" },
  { id: "home", title: "الصفحة الرئيسية" },
  { id: "collectionsPage", title: "أقسامنا" },
  { id: "servicesPage", title: "خدماتنا" },
  { id: "galleryPage", title: "أعمالنا ومعرض الصور" },
  { id: "aboutPage", title: "من نحن" },
  { id: "contactPage", title: "تواصل معنا" },
];

type Status = "idle" | "running" | "done" | "error";
type Json = unknown;

export default function ImportTool() {
  const client = useClient({ apiVersion });
  const [status, setStatus] = useState<Status>("idle");
  const [log, setLog] = useState<string[]>([]);
  const [progress, setProgress] = useState({ done: 0, total: 0 });

  const totalImages = useMemo(() => PAGES.reduce((n, p) => n + countImages(defaults[p.id]), 0), []);

  const add = (line: string) => setLog((l) => [...l, line]);

  const run = useCallback(async () => {
    setStatus("running");
    setLog([]);
    setProgress({ done: 0, total: 0 });
    const uploaded = new Map<string, string>(); // رابط الصورة ← معرّفها في اللوحة

    const uploadImage = async (src: string): Promise<string | null> => {
      if (uploaded.has(src)) return uploaded.get(src)!;
      try {
        const res = await fetch(src);
        if (!res.ok) throw new Error(String(res.status));
        const blob = await res.blob();
        const filename = decodeURIComponent(src.split("?")[0].split("/").pop() || "image");
        const asset = await client.assets.upload("image", blob, { filename });
        uploaded.set(src, asset._id);
        return asset._id;
      } catch {
        add(`⚠️ تعذّر رفع صورة: ${src.split("?")[0]} — سيعرض الموقع الصورة الأصلية مكانها.`);
        return null;
      } finally {
        setProgress((p) => ({ ...p, done: p.done + 1 }));
      }
    };

    try {
      const ids = PAGES.flatMap((p) => [p.id, `drafts.${p.id}`]);
      const existing = new Set<string>(await client.fetch(`*[_id in $ids]._id`, { ids }));
      const todo = PAGES.filter((p) => !existing.has(p.id) && !existing.has(`drafts.${p.id}`));

      PAGES.filter((p) => !todo.includes(p)).forEach((p) => add(`✔ «${p.title}» موجودة مسبقاً في اللوحة — لم تُغيَّر.`));
      if (!todo.length) {
        add("كل الصفحات موجودة في اللوحة. لا حاجة لأي استيراد.");
        setStatus("done");
        return;
      }

      const need = todo.reduce((n, p) => n + countImages(defaults[p.id]), 0);
      setProgress({ done: 0, total: need });

      for (const p of todo) {
        add(`… جارٍ نقل «${p.title}»`);
        const doc = (await convertForSanity(defaults[p.id], uploadImage)) as Record<string, Json>;
        await client.createIfNotExists({ ...doc, _id: p.id, _type: p.id });
        add(`✔ تم نقل «${p.title}»`);
      }
      add("🎉 انتهى الاستيراد. يمكنك الآن تعديل أي صفحة من القائمة في تبويب «المحتوى».");
      setStatus("done");
    } catch (e) {
      add(`❌ حدث خطأ: ${(e as Error).message}`);
      setStatus("error");
    }
  }, [client]);

  return (
    <Box padding={5} style={{ maxWidth: 760, margin: "0 auto" }} dir="rtl">
      <Stack space={5}>
        <Heading as="h1" size={3}>استيراد محتوى الموقع إلى لوحة التحكم</Heading>
        <Card padding={4} radius={3} tone="primary" border>
          <Stack space={3}>
            <Text size={2}>
              هذه الخطوة تُنفَّذ <b>مرة واحدة فقط</b>: تنقل كل نصوص الموقع الحالية و{totalImages} صورة إلى اللوحة، لتتمكن بعدها من تعديلها.
            </Text>
            <Text size={2} muted>
              الأداة آمنة: أي صفحة موجودة مسبقاً في اللوحة لن يتم تغييرها. قد تستغرق العملية دقيقتين — لا تغلق الصفحة حتى تنتهي.
            </Text>
          </Stack>
        </Card>

        <Flex>
          <Button
            text={status === "running" ? "جارٍ الاستيراد…" : "ابدأ الاستيراد"}
            tone="positive"
            fontSize={3}
            padding={4}
            disabled={status === "running"}
            onClick={run}
          />
        </Flex>

        {progress.total > 0 && (
          <Text size={2}>
            الصور: {progress.done} / {progress.total}
          </Text>
        )}

        {log.length > 0 && (
          <Card padding={4} radius={3} border>
            <Stack space={3}>
              {log.map((l, i) => (
                <Text key={i} size={1}>
                  {l}
                </Text>
              ))}
            </Stack>
          </Card>
        )}
      </Stack>
    </Box>
  );
}
