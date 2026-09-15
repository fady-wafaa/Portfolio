# Fady Wafa Nagy — Portfolio

موقع شخصي احترافي لعرض خبرة **Fady Wafa Nagy** كـ **Frontend Software Engineer**، مع التركيز على بناء واجهات SaaS قابلة للتوسع، الأداء العالي، والهندسة المعمارية الحديثة باستخدام React و Next.js و TypeScript.

## نبذة عن البرتفوليو

هذا المشروع ليس مجرد صفحة سيرة ذاتية — بل عرض تفاعلي لمسار هندسي حقيقي في منتجات SaaS الإنتاجية. يبرز:

- **الخبرة العملية** في منصات B2B عالية الحركة
- **دراسة حالة SuiteFleet** كمشروع رئيسي (Azdan)
- **التطور المعماري** من React 16 إلى React 19 مع TypeScript
- **تحسينات الأداء** القابلة للقياس (+20%)
- **المهارات التقنية** منظمة حسب مسؤوليات الهندسة وليس كقائمة شعارات

## الخبرة المهنية

| الفترة | المنصب | الشركة | الملخص |
|--------|--------|--------|--------|
| نوفمبر 2022 — الآن | Frontend Software Engineer | Azdan · دبي (عن بُعد) | العمل على **SuiteFleet** — منصة لوجستيات SaaS متعددة المستأجرين بحركة تتجاوز **1M+ طلب/يوم** |
| نوفمبر 2021 — نوفمبر 2022 | NetSuite Developer | Azdan · دبي (عن بُعد) | تخصيصات NetSuite ERP، أتمتة Workflows، وواجهات React متكاملة مع خدمات NetSuite |
| مشاريع متفرقة | Freelance Frontend Developer | عن بُعد | واجهات ويب بـ JavaScript/React، مع إرشاد المبتدئين |

### أبرز الإنجازات

- **4+ سنوات** خبرة في بناء وتحديث تطبيقات SaaS إنتاجية
- **React 16 → React 19** — ترقية تدريجية للواجهة الأمامية
- **+20%** تحسين أداء التطبيق (Lighthouse / Core Web Vitals)
- **TypeScript** — اعتماد عقود typed للـ UI والـ state و REST APIs
- **AG Grid** — واجهات بيانات ثقيلة مع server-side loading وفلترة وفرز
- **RBAC & Multi-tenancy** — صلاحيات وإعدادات لكل مستأجر
- **RTL** — دعم العربية والإنجليزية في نفس المنصة

## أقسام الموقع

| القسم | المعرف | المحتوى |
|-------|--------|---------|
| **Hero** | `#top` | التعريف، العنوان الرئيسي، روابط السيرة والـ GitHub و LinkedIn، وبطاقة Architecture & Scale Profile |
| **Metrics** | — | أرقام سريعة: 4+ سنوات، 1M+ طلب/يوم، +20% أداء، React 16→19 |
| **SuiteFleet** | `#suitefleet` | دراسة الحالة الرئيسية: السياق، التحدي، المساهمة، الأنظمة، والنتائج + تصور Dispatch Workbench |
| **Architecture** | `#architecture` | تطور معماري من Legacy React 16 إلى بنية typed و modular |
| **Performance** | `#performance` | مسار التحسين: Code Splitting، Caching، AG Grid → +20% |
| **Experience** | `#experience` | Timeline للخبرة المهنية (Azdan، NetSuite، Freelance) |
| **Stack** | `#stack` | المهارات التقنية + Engineering Philosophy (4 مبادئ) |
| **Contact** | `#contact` | البريد، السيرة، LinkedIn، GitHub، ومشاركة الرابط |

## المكدس التقني

### Frontend
React 19 · Next.js 16 · TypeScript · Tailwind CSS · shadcn/ui · Lucide Icons

### State & Data
TanStack Query · Zustand · Redux Toolkit · REST APIs · OpenAPI

### UI & Performance
AG Grid · GSAP · Lighthouse · Code Splitting · Lazy Loading · WCAG

### البنية التحتية
Vinext · Vite · Cloudflare Workers · Wrangler

## هيكل المشروع

```
app/
  page.tsx          # الصفحة الرئيسية — كل الأقسام والمحتوى
  layout.tsx        # Metadata و SEO (Open Graph + JSON-LD)
  globals.css       # التنسيقات والتصميم
components/
  share-portfolio.tsx   # زر مشاركة الرابط (Web Share API / Clipboard)
  profile-map.tsx       # خريطة SVG تصورية لـ SuiteFleet Workbench
public/
  Fady_Wafa_Resume.pdf  # السيرة الذاتية للتحميل
```

## التشغيل المحلي

**المتطلبات:** Node.js `>=22.13.0` · pnpm

```bash
# تثبيت الاعتماديات
pnpm run install:ci

# تشغيل وضع التطوير
pnpm run dev

# بناء المشروع
pnpm run build

# معاينة البناء محلياً
pnpm run start
```

يفتح التطوير على `http://127.0.0.1:5173` افتراضياً.

## التواصل

| | |
|---|---|
| **Email** | fadywafaa36@gmail.com |
| **LinkedIn** | [linkedin.com/in/fady-wafa](https://www.linkedin.com/in/fady-wafa/) |
| **GitHub** | [github.com/fady-wafaa](https://github.com/fady-wafaa) |
| **الموقع** | SuiteFleet: [suitefleet.com](https://www.suitefleet.com/) |
| **الموقع** | القاهرة، مصر — متاح للعمل عن بُعد أو الانتقال |

---

© Fady Wafa Nagy — Frontend Software Engineer · React · Next.js · TypeScript
