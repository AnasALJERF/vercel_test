"use client";

import { useEffect } from "react";

// واجهة لوحة التحكم مصممة من اليسار لليمين؛ نعيد الاتجاه للموقع عند الخروج منها
export default function StudioDirection() {
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.dir;
    html.dir = "ltr";
    document.body.style.background = "#fff";
    return () => {
      html.dir = prev || "rtl";
      document.body.style.background = "";
    };
  }, []);
  return null;
}
