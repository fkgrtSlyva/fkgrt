import Link from "next/link";
import { assetPath } from "@/lib/asset-path";

const galleryItems = [
  ["Вишиванка - генетичний код української нації", "/upload/iblock/6b2/%D0%94%D0%921.jpg"],
  ["Вишиванка - генетичний код української нації", "/upload/iblock/7ae/%D0%94%D0%923.jpg"],
  ["Вишиванка - генетичний код української нації", "/upload/iblock/dd7/%D0%94%D0%922.jpg"],
  ["Навчальна демонтажно-монтажна практика у автомобілістів", "/upload/iblock/59f/%D0%90%D0%B2%D1%82%D0%BE5.jpg"],
  ["Навчальна демонтажно-монтажна практика у автомобілістів", "/upload/iblock/f70/%D0%90%D0%B2%D1%82%D0%BE4.jpg"],
  ["Навчальна демонтажно-монтажна практика у автомобілістів", "/upload/iblock/7c3/%D0%90%D0%B2%D1%82%D0%BE%203.jpg"],
  ["Лекційно-практичне заняття на тему картографія та геологія", "/upload/medialibrary/686/photo_2026-05-18_14-16-19.jpg"],
  ["Лекційно-практичне заняття на тему картографія та геологія", "/upload/medialibrary/9cc/photo_2026-05-18_14-16-14.jpg"],
  ["Лекційно-практичне заняття на тему картографія та геологія", "/upload/medialibrary/2e4/photo_2026-05-18_14-16-17.jpg"],
];

const legacyPages: Record<string, { title: string; description: string; links: [string, string][] }> = {
  about: {
    title: "Коледж",
    description: "Історія коледжу, адміністрація, геологічний музей, спеціальності, публічна інформація та випускники.",
    links: [["Про коледж", "/about"], ["Геологічний музей", "/about/museum"], ["Спеціальності", "/about/spetsialnosti"]],
  },
  vstup: {
    title: "Вступнику",
    description: "Інформація для абітурієнтів: вступна кампанія, правила прийому, спеціальності, ліцензії та акредитації.",
    links: [["Вступна кампанія", "/vstup"], ["Правила та умови прийому", "/vstup/pravila"], ["Спеціальності", "/vstup/spicial"]],
  },
  osvita: {
    title: "Освітній процес",
    description: "Освітні програми, навчальні плани, методичний портал, циклові комісії та електронні ресурси коледжу.",
    links: [["Освітні програми", "/osvita"], ["Навчальні плани", "/osvita/navchaliniplan"], ["Методичний портал", "/osvita/methodrob2"]],
  },
  educational: {
    title: "Студенту",
    description: "Розклад занять, графіки освітнього процесу, рейтингові списки, психологічна служба та студентське самоврядування.",
    links: [["Розклад занять", "/educational/scribble"], ["Рейтингові списки", "/educational/rating"], ["Психологічна служба", "/educational/psychologist"]],
  },
  lecturer: {
    title: "Викладачу",
    description: "Методичний портал, виховна робота, портал навчальних ресурсів та електронні ресурси для викладачів.",
    links: [["Методичний портал", "/osvita/methodrob2"], ["Виховна робота", "/lecturer/educationalwork"], ["Електронні ресурси", "/educational/resources"]],
  },
  news: {
    title: "Новини",
    description: "Останні новини та оголошення фахового коледжу геологорозвідувальних технологій.",
    links: [["Всі новини", "/posts"], ["Галерея", "/gallery"], ["Контакти", "/contacts"]],
  },
  student: {
    title: "Студенту",
    description: "Інформація для студентів: розклад, освітні ресурси, рейтинги, моніторинг якості освіти та самоврядування.",
    links: [["Розклад занять", "/educational/scribble"], ["Електронні ресурси", "/educational/resources"], ["Студентське самоврядування", "/educational/selfmanagement"]],
  },
  contacts: {
    title: "Контакти",
    description: "Фаховий коледж геологорозвідувальних технологій КНУ імені Тараса Шевченка: вул. Василя Тютюнника, 9, м. Київ, 03150.",
    links: [["fkgrt@knu.ua", "mailto:fkgrt@knu.ua"], ["Мапа", "https://goo.gl/maps/L3ZsN2dDtXbyokkH7"], ["+38(044)528-53-55", "tel:+380445285355"]],
  },
};

const migratedPageDetails: Record<string, { title: string; description?: string }> = {
  "about/administratsiya": { title: "Адміністрація" },
  "about/museum": { title: "Геологічний музей" },
  "about/nauki_pro_zemliu": { title: "E4 Науки про Землю" },
  "about/publichna-informatsiya": { title: "Публічна інформація" },
  "about/spetsialnosti": { title: "Спеціальності" },
  "about/spivrobitnitstvo": { title: "Співробітництво" },
  "about/vipuskniki": { title: "Наші випускники" },
  "educational/akademichna-dobrochesnist": { title: "Академічна доброчесність" },
  "educational/monitoring": { title: "Моніторинг якості освіти" },
  "educational/psychologist": { title: "Психологічна служба" },
  "educational/quality": { title: "Забезпечення якості освіти" },
  "educational/rating": { title: "Рейтингові списки" },
  "educational/resources": { title: "Електронні ресурси" },
  "educational/results_monitor": { title: "Результати моніторингу" },
  "educational/scribble": { title: "Розклад занять" },
  "educational/selfmanagement": { title: "Студентське самоврядування" },
  "educational/stop": { title: "STOP! булінг" },
  "educational/survey": { title: "Опитування" },
  "lecturer/educationalwork": { title: "Виховна робота" },
  "osvita/comision": { title: "Циклові комісії" },
  "osvita/kabinet": { title: "Кабінети та лабораторії" },
  "osvita/konzept": { title: "Концепції освітньої діяльності" },
  "osvita/laborotory": { title: "Лабораторії" },
  "osvita/links": { title: "Корисні посилання" },
  "osvita/methodrob": { title: "Методична робота" },
  "osvita/methodrob2": { title: "Методичний портал" },
  "osvita/navchaliniplan": { title: "Навчальні плани" },
  "osvita/portal": { title: "Портал навчальних ресурсів" },
  "osvita/robota": { title: "Навчальна робота" },
  "osvita/subjects/components": { title: "Освітні компоненти" },
  "osvita/subjects/drilling": { title: "Буріння свердловин" },
  "osvita/subjects/ecology": { title: "Екологія" },
  "osvita/subjects/geology": { title: "Геологія" },
  "osvita/subjects/geology_no": { title: "Геологія нафти і газу" },
  "osvita/subjects/geophysics": { title: "Геофізика" },
  "osvita/subjects/geotourism": { title: "Геотуризм" },
  "osvita/subjects/hydrogeological": { title: "Гідрогеологія" },
  "osvita/subjects/maintenance": { title: "Обслуговування та ремонт" },
  "osvita/subjects/motorists": { title: "Автомобільний транспорт" },
  "vstup/doors": { title: "Дні відкритих дверей" },
  "vstup/info": { title: "Інформативна сторінка" },
  "vstup/licence": { title: "Ліцензії. Акредитації" },
  "vstup/pravila": { title: "Правила та умови прийому" },
  "vstup/spicial": { title: "Спеціальності для вступу" },
};

export const legacyRoutePaths = [
  "en",
  "about",
  "about/administratsiya",
  "about/museum",
  "about/nauki_pro_zemliu",
  "about/publichna-informatsiya",
  "about/spetsialnosti",
  "about/spivrobitnitstvo",
  "about/vipuskniki",
  "contacts",
  "educational",
  "educational/akademichna-dobrochesnist",
  "educational/monitoring",
  "educational/psychologist",
  "educational/quality",
  "educational/rating",
  "educational/resources",
  "educational/results_monitor",
  "educational/scribble",
  "educational/selfmanagement",
  "educational/stop",
  "educational/survey",
  "en/about/administratsiya",
  "en/about/museum",
  "en/about/publichna-informatsiya",
  "en/about/spetsialnosti",
  "en/about/spivrobitnitstvo",
  "en/about/vipuskniki",
  "en/educational",
  "en/educational/monitoring",
  "en/educational/psychologist",
  "en/educational/quality",
  "en/educational/resources",
  "en/educational/scribble",
  "en/educational/selfmanagement",
  "en/educational/stop",
  "en/lecturer",
  "en/lecturer/educationalwork",
  "en/osvita",
  "en/osvita/comision",
  "en/osvita/kabinet",
  "en/osvita/konzept",
  "en/osvita/laborotory",
  "en/osvita/links",
  "en/osvita/methodrob",
  "en/osvita/methodrob2",
  "en/osvita/navchaliniplan",
  "en/osvita/portal",
  "en/osvita/robota",
  "en/osvita/subjects/components",
  "en/osvita/subjects/drilling",
  "en/osvita/subjects/ecology",
  "en/osvita/subjects/geology",
  "en/osvita/subjects/geophysics",
  "en/osvita/subjects/geotourism",
  "en/osvita/subjects/hydrogeological",
  "en/osvita/subjects/maintenance",
  "en/osvita/subjects/motorists",
  "gallery",
  "lecturer",
  "lecturer/educationalwork",
  "news",
  "news/det",
  "osvita",
  "osvita/comision",
  "osvita/kabinet",
  "osvita/konzept",
  "osvita/laborotory",
  "osvita/links",
  "osvita/methodrob",
  "osvita/methodrob2",
  "osvita/navchaliniplan",
  "osvita/portal",
  "osvita/robota",
  "osvita/subjects/components",
  "osvita/subjects/drilling",
  "osvita/subjects/ecology",
  "osvita/subjects/geology",
  "osvita/subjects/geology_no",
  "osvita/subjects/geophysics",
  "osvita/subjects/geotourism",
  "osvita/subjects/hydrogeological",
  "osvita/subjects/maintenance",
  "osvita/subjects/motorists",
  "student",
  "vstup",
  "vstup/doors",
  "vstup/info",
  "vstup/licence",
  "vstup/pravila",
  "vstup/spicial",
];

export const knownLegacyRoots = new Set(["en", "gallery", ...Object.keys(legacyPages)]);

export function GalleryPageContent() {
  return (
    <>
    <section className="legacy-breadcrumb">
      <h1>Галерея</h1>
      <p className="mt-8 text-sm">Головна / Галерея</p>
    </section>
    <section className="bg-white py-[70px] md:py-[114px]">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map(([title, image]) => (
              <a key={image} href={assetPath(image)} className="group relative block overflow-hidden bg-[#102c57] shadow-lg">
                <img src={assetPath(image)} alt={title} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-55" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 p-5 font-serif text-lg font-bold text-white">{title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export function LegacyPageContent({ filepath }: { filepath: string }) {
  const normalizedPath = filepath.replace(/\.php$/, "").replace(/\/index$/, "");
  const pathWithoutLocale = normalizedPath.startsWith("en/") ? normalizedPath.slice(3) : normalizedPath;
  const segments = normalizedPath.split("/");
  const root = segments[0] === "en" ? segments[1] : segments[0];
  const page = legacyPages[root] || legacyPages.contacts;
  const details = migratedPageDetails[pathWithoutLocale];
  const title = details?.title || page.title;
  const description = details?.description || page.description;

  return (
    <>
    <section className="legacy-breadcrumb">
      <h1>{title}</h1>
      <p className="mt-8 text-sm">Головна / {title}</p>
    </section>
    <section className="legacy-content bg-white">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="font-serif text-3xl font-black md:text-[36px]">{title}</h2>
        <div className="fk-divider my-7" />
        <p className="max-w-3xl text-[15px] leading-8 text-[#555]">{description}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {page.links.map(([label, href]) => (
            <Link key={href} href={href} className="legacy-link-card">{label}</Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
