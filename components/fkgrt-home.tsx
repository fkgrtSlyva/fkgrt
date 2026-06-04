"use client";

import Link from "next/link";
import React from "react";
import { assetPath } from "@/lib/asset-path";
import { LatestNewsSection, type NewsPost } from "./blocks/latest-news";

const slides = [
  {
    image: "/images/slide-02-1920x810.jpg",
    position: "80% center",
    title: "Інвестиції в освіту",
    text: "Коледж є колективним членом Спілки геологів України, Спілки буровиків України, Українського товариства охорони природи, Українського мінералогічного товариства та Міжнародної асоціації науково-технічного і ділового співробітництва з геофізичних досліджень і робіт у свердловинах.",
    primary: ["Вступна кампанія", "/vstup"],
    secondary: ["Про коледж", "/about"],
  },
  {
    image: "/images/slide-01-1920x810.jpg",
    position: "80% center",
    title: "Інновації в геологічній освіті.",
    text: "Сьогодні коледж – один з провідних закладів фахової передвищої освіти, який готує фахових молодших бакалаврів геологічної галузі. За матеріально-технічним, кадровим і методичним забезпеченням освітнього процесу заклад освіти відповідає вимогам сьогодення.",
    primary: ["Спеціальності", "/about/spetsialnosti"],
    secondary: ["Про коледж", "/about"],
  },
  {
    image: "/images/acad_dobro.jpg",
    position: "50% center",
    title: "Академічна доброчесність",
    text: "Дотримання принципів чесності, відповідальності й поваги є основою освітнього процесу у фаховому коледжі.",
    primary: ["Детальніше", "/educational/akademichna-dobrochesnist"],
    secondary: null,
  },
] as const;

const specialties = [
  ["Е2 Екологія", "/files/eco.pdf", "/images/special1.jpg"],
  ["E4 Науки про Землю", "/about/nauki_pro_zemliu", "/images/special2.jpg"],
  ["G11 Машинобудування (G11.03 Технологічні машини та обладнання)", "/files/mech.pdf", "/images/special3.jpg"],
  ["G16 Гірництво та нафтогазові технології", "/files/drill.pdf", "/images/special5.jpg"],
  ["J8 Автомобільний транспорт", "/files/auto.pdf", "/images/special4.jpg"],
];

const gallery = [
  ["Вишиванка - генетичний код української нації", "/upload/iblock/6b2/%D0%94%D0%921.jpg"],
  ["Навчальна практика у автомобілістів", "/upload/iblock/59f/%D0%90%D0%B2%D1%82%D0%BE5.jpg"],
  ["Лекційно-практичне заняття з картографії та геології", "/upload/medialibrary/686/photo_2026-05-18_14-16-19.jpg"],
];

export function FkgrtHome({ latestPosts }: { latestPosts: NewsPost[] }) {
  const [activeSlide, setActiveSlide] = React.useState(1);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((value) => (value + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-[480px] overflow-hidden bg-[#102c57] text-white md:min-h-[640px] xl:min-h-[705px]">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 bg-cover transition-opacity duration-700 ${activeSlide === index ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${assetPath(slide.image)})`, backgroundPosition: slide.position }}
          />
        ))}
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto flex min-h-[480px] max-w-[1200px] items-center px-4 pb-20 pt-12 md:min-h-[640px] xl:min-h-[705px]">
          <div key={activeSlide} className="max-w-[850px] animate-[legacyFadeUp_.55s_ease_both] text-center md:text-left">
            <h1 className="font-serif text-4xl font-black leading-tight md:text-[58px] md:leading-[1.12]">
              {slides[activeSlide].title}
            </h1>
            <p className="mt-8 hidden max-w-3xl text-[20px] font-bold leading-8 text-white sm:block">
              {slides[activeSlide].text}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5 md:justify-start">
              <Link href={slides[activeSlide].primary[1]} className="fk-btn-blue">{slides[activeSlide].primary[0]}</Link>
              {slides[activeSlide].secondary && (
                <Link href={slides[activeSlide].secondary[1]} className="fk-btn-light">{slides[activeSlide].secondary[0]}</Link>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-11 left-1/2 flex -translate-x-1/2 gap-4 md:left-[18%] md:translate-x-0">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              className={`h-3 w-3 rounded-full border border-white/80 ${activeSlide === index ? "bg-white" : "bg-transparent"}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-[70px] md:py-[114px]">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 text-center md:grid-cols-[33.333%_58.333%] md:items-center md:justify-between md:text-left">
          <Link href="/about" className="mx-auto block max-w-[330px]"><img src={assetPath("/images/kgrt.png")} alt="КГРТ" className="w-full" /></Link>
          <div>
            <h2 className="font-serif text-[26px] font-black leading-[1.35] text-[#2d2d2d] md:text-[27px]">Декілька слів про фаховий коледж геологорозвідувальних технологій</h2>
            <div className="fk-divider mx-auto my-7 md:mx-0 md:mb-[60px] md:mt-7" />
            <div className="space-y-4 text-justify text-[15px] leading-8 text-[#555]">
              <p><i>Відокремлений структурний підрозділ </i>"<b>Фаховий коледж геологорозвідувальних технологій Київського національного університету імені Тараса Шевченка</b>" є одним із найстаріших геологічних навчальних закладів країни і є предметом гордості усіх, хто в ньому працює і навчається, даниною глибокої подяки усім, хто збагачував його славу й честь, створював традиції та закладав фундамент на майбутнє.</p>
              <p>Коледж геологорозвідувальних технологій <b>(КГРТ)</b> створено на базі <b>Київського геологорозвідувального технікуму</b> (<b>1930 рік заснування</b>) та є структурним підрозділом Київського національного університету імені Тараса Шевченка з 2012 року.</p>
              <p><b>Освітня місія</b> - це сприяння гармонійному особистісному розвитку кожного студента, вдосконалення їх професійних компетентностей, формування прагнення і навичок, набуття нових знань.</p>
              <p><b>Візія коледжу - Коледж в майбутньому:</b> флагман геологічної фахової передвищої освіти країни, функціональний коледж, здатний генерувати сучасні геологічні знання та забезпечувати їх трансфер, що створює довгострокові цінності, формує, підтримує і розвиває ресурси надр України для наступних поколінь.</p>
              <p>Коледж готує фахівців для геологічної та видобувної галузей промисловості. Вони отримують посади інженерно-технічного персоналу на більшості геологічних підприємств і установ України та за її межами. Це єдиний навчальний заклад України, що готує фахових молодших бакалаврів з усіх геологорозвідувальних спеціальностей.</p>
            </div>
            <Link href="/about" className="fk-btn-outline mt-4 inline-flex items-center md:mt-2">Детальніше</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f2444] py-[70px] text-white md:py-[114px]">
        <img src={assetPath("/images/home-01-846x1002.jpg")} alt="Спеціальності" className="absolute left-0 top-0 hidden h-full w-[44%] object-cover lg:block" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${assetPath("/images/pattern.png")})` }} />
        <div className="relative mx-auto grid max-w-[1200px] px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div />
          <div>
            <h2 className="font-serif text-3xl font-black md:text-[36px]">Наші спеціальності</h2>
            <div className="my-7 h-[3px] w-20 bg-white" />
            <div className="space-y-10">
              {specialties.map(([title, href, image]) => (
                <Link key={title} href={href} className="group flex min-h-[120px] overflow-hidden bg-white text-[#0f2444] shadow-xl">
                  <span className="block w-[170px] shrink-0 bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: `url(${assetPath(image)})` }} />
                  <span className="flex flex-1 items-center px-7 font-serif text-lg font-bold leading-snug">{title}</span>
                </Link>
              ))}
            </div>
            <Link href="/about/spetsialnosti" className="fk-btn-primary mt-12 inline-block">Подивитись все</Link>
          </div>
        </div>
      </section>

      <section className="bg-cover bg-center py-[100px] text-center text-white md:py-[160px]" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(${assetPath("/video/bg-video-1-lg.jpg")})` }}>
        <h2 className="font-serif text-3xl font-black md:text-[42px]">Довіряють понад 50000 випускників</h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg text-white/90">Приєднуйтесь до нашої спільноти КГРТ щоб досягти успіху.</p>
        <Link href="/vstup" className="fk-btn-primary mt-12 inline-block">Почати</Link>
      </section>

      <LatestNewsSection posts={latestPosts} />

      <section className="bg-[#f3f6f9] py-[70px] md:py-[114px]">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-center font-serif text-3xl font-black text-[#0f2444] md:text-[36px]">Галерея</h2>
          <div className="fk-divider mx-auto my-7" />
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map(([title, image]) => (
              <a key={image} href={assetPath(image)} className="group relative block overflow-hidden bg-[#102c57]">
                <img src={assetPath(image)} alt={title} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-55" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-5 font-serif text-lg font-bold text-white">{title}</span>
              </a>
            ))}
          </div>
          <div className="mt-14 text-center"><Link href="/gallery" className="fk-btn-primary inline-block">Всі фотографії</Link></div>
        </div>
      </section>
    </>
  );
}
