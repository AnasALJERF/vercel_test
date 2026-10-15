"use client";

/**
 * لوحة تحكم موقع شهد للمفروشات — تفتح على: الموقع/studio
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { UploadIcon } from "@sanity/icons";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes, SINGLETONS } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import ImportTool from "./src/sanity/tools/ImportTool";

const singletonTypes = new Set<string>(SINGLETONS.map((s) => s.id));
// على الصفحات المفردة: فقط النشر، إلغاء التعديلات، والاستعادة (لا حذف ولا نسخ)
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "shahed",
  title: "لوحة تحكم شهد للمفروشات",
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,

  plugins: [structureTool({ title: "المحتوى", structure })],

  tools: (prev) => [
    ...prev,
    { name: "import", title: "استيراد المحتوى", icon: UploadIcon, component: ImportTool },
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === "global" ? prev.filter((t) => !singletonTypes.has(t.templateId)) : prev,
  },
});
