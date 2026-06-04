"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";
import { assetPath } from "@/lib/asset-path";

const usefulLinks = [
  ["Міністерство освіти та науки України", "http://mon.gov.ua/"],
  ["Державна служба якості освіти України", "https://sqe.gov.ua/"],
  ["Український центр оцінювання якості освіти", "https://testportal.gov.ua/"],
  ["Київський національний університет імені Тараса Шевченка", "http://univ.kiev.ua/"],
  ["Навчально-науковий інститут \"Інститут геології\"", "http://www.geol.univ.kiev.ua/ua/"],
  ["НАУКОВО-МЕТОДИЧНИЙ ЦЕНТР ВИЩОЇ ТА ФАХОВОЇ ПЕРЕДВИЩОЇ ОСВІТИ", "https://nmc-vfpo.com/"],
];

export const Footer = () => {
  return (
    <footer className="bg-white text-[#2d2e2e]">
      <div className="mx-auto max-w-[1800px] px-4">
        <div className="h-px bg-[#e5e5e5]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-[60px]">
        <div className="grid gap-12 text-center md:grid-cols-[230px_1fr] lg:grid-cols-[220px_1.1fr_1.2fr] lg:gap-16 lg:text-left">
          <div className="mx-auto max-w-[220px] lg:mx-0">
            <Link href="/" className="inline-block">
              <span className="flex justify-center gap-2 lg:justify-start">
                <img src={assetPath("/about/gerb.jpg")} alt="КНУ" className="h-[92px] w-[92px] object-contain" />
                <img src={assetPath("/images/kgrt.png")} alt="КГРТ" className="h-[92px] w-[92px] object-contain" />
              </span>
              <span className="mt-6 block font-serif text-[15px] font-black uppercase leading-snug text-[#2d2e2e]">
                Фаховий коледж геологорозвідувальних технологій
              </span>
              <span className="mt-2 block font-serif text-sm italic leading-relaxed text-[#888]">
                Київського національного університету імені Тараса Шевченка
              </span>
            </Link>
          </div>

          <div>
            <h6 className="font-serif text-lg font-black text-[#2d2e2e]">Контакти</h6>
            <div className="mx-auto mt-3 h-0.5 w-10 bg-[#3687aa] lg:mx-0" />
            <ul className="mt-8 space-y-4 text-[15px] leading-6">
              <li className="flex items-start justify-center gap-3 lg:justify-start">
                <Phone size={18} className="mt-1 shrink-0 text-[#0a1c44]" />
                <span>
                  <a className="text-[#2d2e2e] hover:text-[#3687aa]" href="tel:+380445285355">+38(044)528-53-55</a>,{" "}
                  <a className="text-[#2d2e2e] hover:text-[#3687aa]" href="tel:+380445281691">+38(044)528-16-91</a>,{" "}
                  <a className="text-[#2d2e2e] hover:text-[#3687aa]" href="tel:+380445290494">+38(044)529-04-94</a>
                </span>
              </li>
              <li className="flex items-start justify-center gap-3 lg:justify-start">
                <MapPin size={18} className="mt-1 shrink-0 text-[#0a1c44]" />
                <a className="text-[#2d2e2e] hover:text-[#3687aa]" href="https://goo.gl/maps/L3ZsN2dDtXbyokkH7">
                  вул. Василя Тютюнника, 9 (колишня Анрі Барбюса), м. Київ, 03150
                </a>
              </li>
              <li className="flex items-start justify-center gap-3 lg:justify-start">
                <Mail size={18} className="mt-1 shrink-0 text-[#0a1c44]" />
                <a className="text-[#3687aa] hover:text-[#0a1c44]" href="mailto:fkgrt@knu.ua">fkgrt@knu.ua</a>
              </li>
              <li>
                <div className="mt-5 flex justify-center gap-3 lg:justify-start">
                  <a className="grid h-8 w-8 place-items-center rounded-full bg-[#395b98] text-white" href="https://m.facebook.com/kgrt.knu/?_rdr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={14} /></a>
                  <a className="grid h-8 w-8 place-items-center rounded-full bg-[linear-gradient(-45deg,#ffdc80,#e1306c_50%,#405de6)] text-white" href="https://www.instagram.com/kgrt.college" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={15} /></a>
                  <a className="grid h-8 w-8 place-items-center rounded-full bg-[#ff0000] text-white" href="https://www.youtube.com/channel/UCDLPkMZbUoZvZuNVzcHTCXw/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube size={15} /></a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-serif text-lg font-black text-[#2d2e2e]">Корисні посилання</h6>
            <div className="mx-auto mt-3 h-0.5 w-10 bg-[#3687aa] lg:mx-0" />
            <ol className="mt-8 list-decimal space-y-2 pl-5 text-left text-[15px] leading-6 text-[#555]">
              {usefulLinks.map(([label, href]) => (
                <li key={href}>
                  <a className="hover:text-[#3687aa]" href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-[#0a1c44] py-2 text-white">
        <div className="mx-auto max-w-[1200px] px-4 text-center text-xs leading-6 lg:text-left">
          © {new Date().getFullYear()}. <small>ВІДОКРЕМЛЕНИЙ СТРУКТУРНИЙ ПІДРОЗДІЛ</small> "ФАХОВИЙ КОЛЕДЖ ГЕОЛОГОРОЗВІДУВАЛЬНИХ ТЕХНОЛОГІЙ<br className="hidden sm:block" /> КИЇВСЬКОГО НАЦІОНАЛЬНОГО УНІВЕРСИТЕТУ ІМЕНІ ТАРАСА ШЕВЧЕНКА"
        </div>
      </div>
    </footer>
  );
};
