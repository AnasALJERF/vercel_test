/** رابط واتساب برسالة جاهزة */
export const waHref = (whatsapp: string | undefined, msg = "السلام عليكم، أرغب بالاستفسار عن المفروشات") =>
  `https://wa.me/${(whatsapp || "963988729260").replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
