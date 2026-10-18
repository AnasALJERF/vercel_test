/**
 * المحتوى الافتراضي للموقع — بنفس شكل لوحة التحكم (Sanity).
 *  - يُعرض تلقائياً إذا لم يكن المحتوى موجوداً في اللوحة أو تعذّر الاتصال بها.
 *  - هو نفسه ما ينقله زر «استيراد المحتوى» إلى اللوحة أول مرة.
 */
import { IMG, collections, features, highlights, projects, services, steps, testimonials, whyUs } from "@/lib/data";
import { gallery } from "@/lib/gallery";
import { SITE } from "@/lib/seo";
import type { Img } from "./types";

const img = (local: string, alt = ""): Img => ({ local, alt });
const key = (s: string) => s.replace(/[^a-z0-9]/gi, "").slice(0, 20) || Math.random().toString(36).slice(2, 10);

export const defaults = {
  settings: {
    siteName: SITE.name,
    tagline: SITE.tagline,
    manager: SITE.manager,
    footerAbout: SITE.footerAbout,
    addressLine1: SITE.addressLine1,
    addressLine2: SITE.addressLine2,
    addressLine3: SITE.addressLine3,
    hours: SITE.hours,
    phones: SITE.phones.map((p, i) => ({ _type: "phone", _key: `ph${i}`, display: p.display, tel: p.tel })),
    whatsapp: SITE.whatsapp,
    facebook: SITE.facebook,
    instagram: SITE.instagram,
    mapEmbed: SITE.mapEmbed,
    mapsUrl: SITE.mapsUrl,
  },

  home: {
    hero: {
      eyebrow: "تفاصيل تصنع الفرق",
      title: "حوّل منزلك إلى مساحة",
      titleAccent: "تنبض بالأناقة والفخامة",
      text:
        "في صالة شهد للمفروشات في سلمية لا نكتفي ببيع المفروشات، بل نصنع تجربة متكاملة تمنح منزلك شخصية مميزة تجمع بين الفخامة والراحة وجودة التنفيذ. من المجالس العربية والخليجية وغرف الضيوف والنوم والسفرة، إلى البرادي والأقمشة الفاخرة، نهتم بأدق التفاصيل لنقدم لك فرشاً يليق بمنزلك.",
      byline: "صالة شهد للمفروشات · سلمية — بإدارة أحمد الجرف (أبو هادي)",
      image: img(IMG.heroSofa, "صالون فاخر — شهد للمفروشات"),
    },
    features: features.map((f, i) => ({ _type: "iconCard", _key: `f${i}`, title: f.title, body: f.body, icon: f.icon })),
    worksHeading: {
      eyebrow: "من أعمالنا",
      title: "صور حقيقية من بيوت عملائنا",
      text: "اختر القسم الذي يهمك، واضغط على أي صورة لتكبيرها.",
    },
    intro: {
      eyebrow: "من نحن",
      title: "نؤمن أن جمال المنزل يبدأ من التفاصيل",
      paragraphs: [
        "منذ سنوات، تساعد صالة شهد للمفروشات العائلات في سلمية ومحافظة حماة على تصميم منازل تجمع بين الأناقة والراحة والجودة. لا نعرض منتجات جاهزة فقط، بل نساعد كل عميل على اختيار ما يناسب ذوقه ومساحة منزله ليحصل على نتيجة يشعر بالفخر بها كل يوم.",
        "نعتمد على خامات مختارة، وخشب من النوع الأول، ومخامل مستوردة، مع فريق متخصص يتابع العمل من الفكرة وحتى التسليم، لأننا نؤمن أن الجودة تظهر في التفاصيل الصغيرة قبل الكبيرة.",
      ],
      image1: img(IMG.homeIntro1, "كراسي مخمل من تنفيذ شهد للمفروشات"),
      image2: img(IMG.homeIntro2, "صالون بيج مع برادي من أعمال شهد للمفروشات في سلمية"),
    },
    highlights: highlights.map((h, i) => ({
      _type: "highlight",
      _key: `h${i}`,
      label: h.key,
      title: h.title,
      line: h.line,
      image: img(h.image, `${h.title} — شهد للمفروشات في سلمية`),
    })),
    collectionsHeading: {
      eyebrow: "أقسامنا",
      title: "كل ما تحتاجه لتأثيث منزلك في مكان واحد",
      text: "اكتشف مجموعة متكاملة من المجالس، الصالونات، غرف النوم، غرف السفرة، البرادي، والأقمشة الفاخرة، بتصاميم تناسب مختلف الأذواق وخامات تمنحك الجودة التي تستحقها.",
    },
    stepsHeading: { eyebrow: "كيف نعمل", title: "رحلة واضحة... من أول زيارة حتى آخر لمسة" },
    steps: steps.map((s, i) => ({ _type: "step", _key: `s${i}`, title: s.title, body: s.body })),
    testimonialsHeading: { eyebrow: "آراء عملائنا", title: "ثقة بنيناها مع كل مشروع" },
    testimonials: testimonials.map((t, i) => ({ _type: "testimonial", _key: `t${i}`, text: t.text, name: t.name })),
    brandLine: "تفاصيل متقنة... وخامات مختارة... ونتيجة تليق بمنزلك.",
    cta: {
      eyebrow: "ابدأ رحلتك معنا",
      title: "لنصمم معاً منزلاً يعكس ذوقك",
      text: "سواء كنت تؤثث منزلاً جديداً أو ترغب في تجديد مساحة تحبها، يسعد فريق شهد للمفروشات بمساعدتك في اختيار الحلول التي تناسب ذوقك وميزانيتك، مع تنفيذ احترافي يهتم بكل تفصيلة.",
      image: img(IMG.workshop),
    },
  },

  collectionsPage: {
    hero: {
      eyebrow: "أقسامنا",
      title: "كل ما تحتاجه لتأثيث منزل يعكس ذوقك",
      subtitle:
        "في شهد للمفروشات نؤمن أن كل قطعة تختارها تضيف لمسة خاصة إلى منزلك، لذلك نقدم تشكيلة متكاملة من المفروشات والبرادي والأقمشة، بخامات مختارة بعناية وتنفيذ احترافي يجمع بين الجمال، الراحة، والمتانة، لتستمتع بمنزل يليق بك.",
      image: img(IMG.heroCollections),
    },
    items: collections.map((c) => ({
      _type: "collectionItem",
      _key: key(c.slug),
      title: c.title,
      tagline: c.tagline,
      description: c.description,
      includes: c.items,
      image: img(c.image, `${c.title} — شهد للمفروشات في سلمية`),
      icon: c.icon,
    })),
    closing: {
      title: "لم تجد ما تبحث عنه؟",
      text: "إذا كانت لديك فكرة خاصة أو ترغب بتفصيل قطعة تناسب مساحة منزلك، يسعد فريق شهد للمفروشات بمساعدتك في اختيار التصميم والخامات المناسبة، مع تنفيذ احترافي يراعي أدق التفاصيل.",
      button: "تواصل معنا عبر واتساب",
    },
  },

  servicesPage: {
    hero: {
      eyebrow: "خدماتنا",
      title: "حلول متكاملة... لكل تفاصيل منزلك",
      subtitle:
        "في شهد للمفروشات لا نقدم منتجات منفصلة، بل نرافقك في رحلة تأثيث متكاملة تبدأ من الفكرة الأولى، مروراً بالتصميم واختيار الخامات، وحتى التنفيذ والتركيب النهائي.",
      image: img(IMG.workshop),
    },
    intro: "بفضل فروعنا المتخصصة وفريقنا الفني، تستطيع إنجاز مختلف تفاصيل منزلك أو مشروعك من خلال جهة واحدة تهتم بكل تفصيلة.",
    items: services.map((s, i) => ({
      _type: "serviceItem",
      _key: `sv${i}`,
      title: s.title,
      headline: s.headline,
      body: s.body,
      points: s.points,
      icon: s.icon,
    })),
    stepsTitle: "رحلة واضحة... ونتيجة تستحق الانتظار",
    closing: {
      title: "هل لديك مشروع جديد؟",
      text: "دع فريق شهد للمفروشات يساعدك في تنفيذ مساحة تعكس ذوقك، بخامات عالية الجودة وتنفيذ احترافي من البداية وحتى التسليم.",
      button: "ابدأ مشروعك معنا",
    },
  },

  galleryPage: {
    hero: {
      eyebrow: "أعمالنا",
      title: "مشاريع نفخر بها... وثقة نعتز بها",
      subtitle:
        "كل مشروع ننفذه هو انعكاس لاهتمامنا بالتفاصيل، وجودة الخامات، ودقة التنفيذ. استعرض مجموعة من أعمالنا التي شملت المنازل، الفلل، المضافات، المحلات التجارية، والمشاريع الخاصة.",
      image: img(IMG.heroGallery),
    },
    projectsHeading: { eyebrow: "المشاريع المنجزة", title: "كل مشروع يحكي قصة نجاح" },
    projects: projects.map((p, i) => ({
      _type: "project",
      _key: `p${i}`,
      title: p.title,
      scope: p.scope,
      image: img(p.image, `${p.title} — من أعمال شهد للمفروشات`),
    })),
    galleryHeading: {
      eyebrow: "معرض الصور",
      title: "شاهد أعمالنا على أرض الواقع",
      text: "كل صورة في هذا المعرض توثق مشروعاً نفذه فريق شهد للمفروشات، لتتعرف عن قرب على جودة التنفيذ، ودقة التشطيب، والاهتمام بأدق التفاصيل.",
    },
    images: gallery.map((g, i) => ({
      _type: "image",
      _key: `g${i}`,
      local: g.src,
      thumb: g.thumb,
      w: g.w,
      h: g.h,
      alt: g.alt.split(" — ")[0],
      category: g.cat,
    })),
    closing: {
      title: "قد يكون مشروعك هو عملنا القادم",
      text: "سواء كنت ترغب في تأثيث منزل جديد، أو تجديد مساحة قائمة، أو تجهيز مشروع تجاري، يسعد فريق شهد للمفروشات بتحويل أفكارك إلى واقع، بجودة تنفيذ واهتمام بالتفاصيل يليق بثقتك.",
      button: "اطلب استشارة مجانية",
    },
  },

  aboutPage: {
    hero: {
      eyebrow: "من نحن",
      title: "نبني مساحات تعكس ذوق أصحابها",
      subtitle: "شهد للمفروشات — بإدارة أحمد الجرف (أبو هادي)",
      image: img(IMG.heroAbout),
    },
    story: {
      eyebrow: "قصتنا",
      title: "شغف بالجودة... واهتمام بالتفاصيل",
      paragraphs: [
        "بدأت شهد للمفروشات برؤية واضحة؛ أن يكون كل منزل نعمل عليه مساحة تعكس ذوق أصحابه وتمنحهم شعوراً بالفخر والراحة في كل زاوية.",
        "لهذا لا ننظر إلى المفروشات كمنتجات فقط، بل كعناصر تكمل شخصية المكان، لذلك نحرص على اختيار الخامات بعناية، والاهتمام بأدق تفاصيل التنفيذ، حتى تخرج كل قطعة بالمستوى الذي نستحق أن نضع اسمنا عليه.",
        "على مدار السنوات، اكتسبنا ثقة العديد من العملاء في تأثيث المنازل، الفلل، المضافات، والمحلات التجارية، لأننا نؤمن أن الجودة الحقيقية لا تظهر في المظهر فقط، بل في متانة التنفيذ، ودقة التشطيب، والالتزام مع العميل من بداية المشروع وحتى تسليمه. وثقة عملائنا ستبقى دائماً أكبر إنجاز نفخر به.",
      ],
      images: [
        { _type: "image", _key: "a1", ...img(IMG.about1, "كراسي منجدة من أعمال شهد للمفروشات") },
        { _type: "image", _key: "a2", ...img(IMG.about2, "برادي بنقشة كلاسيكية") },
        { _type: "image", _key: "a3", ...img(IMG.about3, "تسريحة برفوف مضيئة") },
        { _type: "image", _key: "a4", ...img(IMG.about4, "سرير طابقين للأطفال بدرج مضيء") },
      ],
    },
    vision: {
      title: "رؤيتنا",
      subtitle: "أن يصبح كل منزل أكثر تميزاً",
      body: "نسعى لأن نقدم حلولاً متكاملة في عالم المفروشات والديكور، تجمع بين التصميم الراقي، والخامات الممتازة، والتنفيذ الاحترافي، لنساعد عملاءنا على إنشاء مساحات تعكس شخصيتهم وتليق بذوقهم.",
    },
    mission: {
      title: "رسالتنا",
      subtitle: "تجربة متكاملة من الاستشارة حتى التسليم",
      body: "أن نقدم تجربة متكاملة تبدأ بالاستشارة الصادقة، مروراً باختيار أفضل الخامات، وتنتهي بتنفيذ يرضينا قبل أن يرضي العميل.",
    },
    statsTitle: "أرقام نفتخر بها",
    stats: [
      { _type: "stat", _key: "st1", value: "100%", label: "خامات مختارة بعناية" },
      { _type: "stat", _key: "st2", value: "كفالة", label: "على جميع أعمالنا" },
      { _type: "stat", _key: "st3", value: "02", label: "فرعان متخصصان: CNC ليزر والمطابخ" },
    ],
    whyHeading: { eyebrow: "لماذا يختارنا عملاؤنا؟", title: "جودة نعد بها... ونلتزم بها" },
    whyUs: whyUs.map((w, i) => ({ _type: "iconCard", _key: `w${i}`, title: w.title, body: w.body, icon: w.icon })),
    closingLine: "نحن لا نؤثث المنازل فقط... بل نصنع أماكن تحب أن تعيش فيها",
  },

  contactPage: {
    hero: {
      eyebrow: "تواصل معنا",
      title: "يسعدنا أن نكون جزءاً من مشروعك القادم",
      subtitle:
        "إذا كنت تبحث عن الجودة، والذوق، والتنفيذ الاحترافي، فإن فريق شهد للمفروشات جاهز للإجابة عن استفساراتك ومساعدتك في اختيار الحلول المناسبة لمنزلك أو مشروعك.",
      image: img(IMG.heroContact),
    },
    infoHeading: { eyebrow: "معلومات التواصل", title: "تفضل بزيارتنا في سلمية" },
    reasonsHeading: { eyebrow: "لماذا تتواصل معنا؟", title: "نحن معك في كل خطوة" },
    reasons: [
      { _type: "iconCard", _key: "r1", title: "استشارة مجانية", body: "نساعدك في اختيار التصميم والخامات المناسبة قبل اتخاذ أي قرار.", icon: "ruler" },
      { _type: "iconCard", _key: "r2", title: "تنفيذ حسب الطلب", body: "كل مشروع ينفذ بما يتناسب مع مساحة المكان وذوق العميل، دون الاعتماد على حلول جاهزة.", icon: "layout" },
      { _type: "iconCard", _key: "r3", title: "كفالة على التنفيذ", body: "نلتزم بجودة أعمالنا ونوفر كفالة تمنحك مزيداً من الثقة والاطمئنان.", icon: "shield" },
    ],
    visit: {
      title: "بانتظار زيارتك",
      text: "سواء كنت ترغب في تأثيث منزل كامل أو اختيار قطعة واحدة، يسعدنا استقبالكم في صالة شهد للمفروشات ومساعدتكم في تحويل أفكاركم إلى واقع.",
    },
  },
};

export type Defaults = typeof defaults;
export type DocId = keyof Defaults;
