"use client";

import Link from "next/link";
import React from "react";
import { assetPath } from "@/lib/asset-path";
import type { Lang } from "@/lib/i18n";
import { localizeHref } from "@/lib/en-routes";
import { useLayout } from "@/components/layout/layout-context";
import { LatestNewsSection, type NewsPost } from "./blocks/latest-news";

type Slide = {
  image: string;
  position: string;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
  primary: { label: Record<Lang, string>; href: string };
  secondary: { label: Record<Lang, string>; href: string } | null;
};

const slides: Slide[] = [
  {
    image: "/images/slide-02-1920x810.jpg",
    position: "80% center",
    title: { uk: "Інвестиції в освіту", en: "Investing in Education" },
    text: {
      uk: "Коледж є колективним членом Спілки геологів України, Спілки буровиків України, Українського товариства охорони природи, Українського мінералогічного товариства та Міжнародної асоціації науково-технічного і ділового співробітництва з геофізичних досліджень і робіт у свердловинах.",
      en: "The College is a collective member of the Union of Geologists of Ukraine, the Union of Drillers of Ukraine, the Ukrainian Society for Nature Conservation, the Ukrainian Mineralogical Society, and the International Association for Scientific, Technical and Business Cooperation in Geophysical Research and Borehole Operations.",
    },
    primary: { label: { uk: "Вступна кампанія", en: "Admission Campaign" }, href: "/vstup" },
    secondary: { label: { uk: "Про коледж", en: "About the College" }, href: "/about" },
  },
  {
    image: "/images/slide-01-1920x810.jpg",
    position: "80% center",
    title: { uk: "Інновації в геологічній освіті.", en: "Innovations in Geological Education." },
    text: {
      uk: "Сьогодні коледж – один з провідних закладів фахової передвищої освіти, який готує фахових молодших бакалаврів геологічної галузі. За матеріально-технічним, кадровим і методичним забезпеченням освітнього процесу заклад освіти відповідає вимогам сьогодення.",
      en: "Today the College is one of the leading institutions of professional pre-higher education, training professional junior bachelors in the geological field. In its material, technical, staffing and methodological support of the educational process, the institution meets the demands of today.",
    },
    primary: { label: { uk: "Спеціальності", en: "Specialties" }, href: "/about/spetsialnosti" },
    secondary: { label: { uk: "Про коледж", en: "About the College" }, href: "/about" },
  },
  {
    image: "/images/acad_dobro.jpg",
    position: "50% center",
    title: { uk: "Академічна доброчесність", en: "Academic Integrity" },
    text: {
      uk: "Дотримання принципів чесності, відповідальності й поваги є основою освітнього процесу у фаховому коледжі.",
      en: "Adherence to the principles of honesty, responsibility and respect is the foundation of the educational process at the College.",
    },
    primary: { label: { uk: "Детальніше", en: "Learn more" }, href: "/educational/akademichna-dobrochesnist" },
    secondary: null,
  },
];

const specialties: { title: Record<Lang, string>; href: string; image: string }[] = [
  { title: { uk: "Е2 Екологія", en: "E2 Ecology" }, href: "/files/eco.pdf", image: "/images/special1.jpg" },
  { title: { uk: "E4 Науки про Землю", en: "E4 Earth Sciences" }, href: "/about/nauki_pro_zemliu", image: "/images/special2.jpg" },
  { title: { uk: "G11 Машинобудування (G11.03 Технологічні машини та обладнання)", en: "G11 Mechanical Engineering (G11.03 Process Machines and Equipment)" }, href: "/files/mech.pdf", image: "/images/special3.jpg" },
  { title: { uk: "G16 Гірництво та нафтогазові технології", en: "G16 Mining and Oil & Gas Technologies" }, href: "/files/drill.pdf", image: "/images/special5.jpg" },
  { title: { uk: "J8 Автомобільний транспорт", en: "J8 Automobile Transport" }, href: "/files/auto.pdf", image: "/images/special4.jpg" },
];

const gallery: { title: Record<Lang, string>; image: string }[] = [
  { title: { uk: "Вишиванка - генетичний код української нації", en: "Vyshyvanka — the genetic code of the Ukrainian nation" }, image: "/upload/iblock/6b2/%D0%94%D0%921.jpg" },
  { title: { uk: "Навчальна практика у автомобілістів", en: "Practical training for automobile students" }, image: "/upload/iblock/59f/%D0%90%D0%B2%D1%82%D0%BE5.jpg" },
  { title: { uk: "Лекційно-практичне заняття з картографії та геології", en: "Lecture and practical class in cartography and geology" }, image: "/upload/medialibrary/686/photo_2026-05-18_14-16-19.jpg" },
];

const t = {
  aboutHeading: {
    uk: "Декілька слів про фаховий коледж геологорозвідувальних технологій",
    en: "A few words about the Professional College of Geological Prospecting Technologies",
  },
  aboutParagraphs: {
    uk: [
      '<i>Відокремлений структурний підрозділ </i>"<b>Фаховий коледж геологорозвідувальних технологій Київського національного університету імені Тараса Шевченка</b>" є одним із найстаріших геологічних навчальних закладів країни і є предметом гордості усіх, хто в ньому працює і навчається, даниною глибокої подяки усім, хто збагачував його славу й честь, створював традиції та закладав фундамент на майбутнє.',
      "Коледж геологорозвідувальних технологій <b>(КГРТ)</b> створено на базі <b>Київського геологорозвідувального технікуму</b> (<b>1930 рік заснування</b>) та є структурним підрозділом Київського національного університету імені Тараса Шевченка з 2012 року.",
      "<b>Освітня місія</b> - це сприяння гармонійному особистісному розвитку кожного студента, вдосконалення їх професійних компетентностей, формування прагнення і навичок, набуття нових знань.",
      "<b>Візія коледжу - Коледж в майбутньому:</b> флагман геологічної фахової передвищої освіти країни, функціональний коледж, здатний генерувати сучасні геологічні знання та забезпечувати їх трансфер, що створює довгострокові цінності, формує, підтримує і розвиває ресурси надр України для наступних поколінь.",
      "Коледж готує фахівців для геологічної та видобувної галузей промисловості. Вони отримують посади інженерно-технічного персоналу на більшості геологічних підприємств і установ України та за її межами. Це єдиний навчальний заклад України, що готує фахових молодших бакалаврів з усіх геологорозвідувальних спеціальностей.",
    ],
    en: [
      'The <i>Separate Structural Subdivision </i>"<b>Professional College of Geological Prospecting Technologies of Taras Shevchenko National University of Kyiv</b>" is one of the oldest geological educational institutions in the country — a source of pride for everyone who works and studies here, and a tribute of deep gratitude to all who enriched its glory and honour, created its traditions and laid the foundation for the future.',
      "The College of Geological Prospecting Technologies <b>(KGRT)</b> was established on the basis of the <b>Kyiv Geological Prospecting Technical School</b> (<b>founded in 1930</b>) and has been a structural subdivision of Taras Shevchenko National University of Kyiv since 2012.",
      "<b>Our educational mission</b> is to foster the harmonious personal development of every student, enhance their professional competencies, and build the aspiration and skills to acquire new knowledge.",
      "<b>The College's vision — the College of the future:</b> the flagship of the country's professional pre-higher geological education, a functional college able to generate modern geological knowledge and ensure its transfer, creating long-term value and shaping, sustaining and developing Ukraine's subsoil resources for future generations.",
      "The College trains specialists for the geological and extractive industries. Its graduates take up engineering and technical positions at most geological enterprises and institutions in Ukraine and beyond. It is the only educational institution in Ukraine that trains professional junior bachelors across all geological prospecting specialties.",
    ],
  },
  learnMore: { uk: "Детальніше", en: "Learn more" },
  ourSpecialties: { uk: "Наші спеціальності", en: "Our Specialties" },
  viewAll: { uk: "Подивитись все", en: "View all" },
  trustedHeading: { uk: "Довіряють понад 50000 випускників", en: "Trusted by over 50,000 graduates" },
  trustedText: { uk: "Приєднуйтесь до нашої спільноти КГРТ щоб досягти успіху.", en: "Join our KGRT community to achieve success." },
  getStarted: { uk: "Почати", en: "Get started" },
  galleryHeading: { uk: "Галерея", en: "Gallery" },
  allPhotos: { uk: "Всі фотографії", en: "All photos" },
  slide: { uk: "Слайд", en: "Slide" },
};

export function FkgrtHome({ latestPosts, lang = "uk" }: { latestPosts: NewsPost[]; lang?: Lang }) {
  const [activeSlide, setActiveSlide] = React.useState(1);
  const inEnglish = lang === "en";
  const { enRoutes } = useLayout();
  const enRouteSet = React.useMemo(() => new Set(enRoutes), [enRoutes]);
  const link = (href: string) => localizeHref(href, inEnglish, enRouteSet);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((value) => (value + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <>
      <section className="relative min-h-[480px] overflow-hidden bg-[#102c57] text-white md:min-h-[640px] xl:min-h-[705px]">
        {slides.map((s, index) => (
          <div
            key={s.image}
            className={`absolute inset-0 bg-cover transition-opacity duration-700 ${activeSlide === index ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${assetPath(s.image)})`, backgroundPosition: s.position }}
          />
        ))}
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto flex min-h-[480px] max-w-[1200px] items-center px-4 pb-20 pt-12 md:min-h-[640px] xl:min-h-[705px]">
          <div key={activeSlide} className="max-w-[850px] animate-[legacyFadeUp_.55s_ease_both] text-center md:text-left">
            <h1 className="font-serif text-4xl font-black leading-tight md:text-[58px] md:leading-[1.12]">
              {slide.title[lang]}
            </h1>
            <p className="mt-8 hidden max-w-3xl text-[20px] font-bold leading-8 text-white sm:block">
              {slide.text[lang]}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5 md:justify-start">
              <Link href={link(slide.primary.href)} className="fk-btn-blue">{slide.primary.label[lang]}</Link>
              {slide.secondary && (
                <Link href={link(slide.secondary.href)} className="fk-btn-light">{slide.secondary.label[lang]}</Link>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-11 left-1/2 flex -translate-x-1/2 gap-4 md:left-[18%] md:translate-x-0">
          {slides.map((s, index) => (
            <button
              key={s.image}
              type="button"
              className={`h-3 w-3 rounded-full border border-white/80 ${activeSlide === index ? "bg-white" : "bg-transparent"}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`${t.slide[lang]} ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-[70px] md:py-[114px]">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 text-center md:grid-cols-[33.333%_58.333%] md:items-center md:justify-between md:text-left">
          <Link href={link("/about")} className="mx-auto block max-w-[330px]"><img src={assetPath("/images/kgrt.png")} alt="КГРТ" className="w-full" /></Link>
          <div>
            <h2 className="font-serif text-[26px] font-black leading-[1.35] text-[#2d2d2d] md:text-[27px]">{t.aboutHeading[lang]}</h2>
            <div className="fk-divider mx-auto my-7 md:mx-0 md:mb-[60px] md:mt-7" />
            <div className="space-y-4 text-justify text-[15px] leading-8 text-[#555]">
              {t.aboutParagraphs[lang].map((html, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: html }} />
              ))}
            </div>
            <Link href={link("/about")} className="fk-btn-outline mt-4 inline-flex items-center md:mt-2">{t.learnMore[lang]}</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f2444] py-[70px] text-white md:py-[114px]">
        <img src={assetPath("/images/home-01-846x1002.jpg")} alt="" className="absolute left-0 top-0 hidden h-full w-[44%] object-cover lg:block" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${assetPath("/images/pattern.png")})` }} />
        <div className="relative mx-auto grid max-w-[1200px] px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div />
          <div>
            <h2 className="font-serif text-3xl font-black md:text-[36px]">{t.ourSpecialties[lang]}</h2>
            <div className="my-7 h-[3px] w-20 bg-white" />
            <div className="space-y-10">
              {specialties.map((s) => (
                <Link key={s.title.uk} href={link(s.href)} className="group flex min-h-[120px] overflow-hidden bg-white text-[#0f2444] shadow-xl">
                  <span className="block w-[170px] shrink-0 bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: `url(${assetPath(s.image)})` }} />
                  <span className="flex flex-1 items-center px-7 font-serif text-lg font-bold leading-snug">{s.title[lang]}</span>
                </Link>
              ))}
            </div>
            <Link href={link("/about/spetsialnosti")} className="fk-btn-primary mt-12 inline-block">{t.viewAll[lang]}</Link>
          </div>
        </div>
      </section>

      <section className="bg-cover bg-center py-[100px] text-center text-white md:py-[160px]" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(${assetPath("/video/bg-video-1-lg.jpg")})` }}>
        <h2 className="font-serif text-3xl font-black md:text-[42px]">{t.trustedHeading[lang]}</h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg text-white/90">{t.trustedText[lang]}</p>
        <Link href={link("/vstup")} className="fk-btn-primary mt-12 inline-block">{t.getStarted[lang]}</Link>
      </section>

      <LatestNewsSection posts={latestPosts} lang={lang} />

      <section className="bg-[#f3f6f9] py-[70px] md:py-[114px]">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-center font-serif text-3xl font-black text-[#0f2444] md:text-[36px]">{t.galleryHeading[lang]}</h2>
          <div className="fk-divider mx-auto my-7" />
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((g) => (
              <a key={g.image} href={assetPath(g.image)} className="group relative block overflow-hidden bg-[#102c57]">
                <img src={assetPath(g.image)} alt={g.title[lang]} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-55" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-5 font-serif text-lg font-bold text-white">{g.title[lang]}</span>
              </a>
            ))}
          </div>
          <div className="mt-14 text-center"><Link href={link("/gallery")} className="fk-btn-primary inline-block">{t.allPhotos[lang]}</Link></div>
        </div>
      </section>
    </>
  );
}
