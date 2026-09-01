"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, MapPin, Menu, Phone, Search, X } from "lucide-react";
import React from "react";
import { assetPath } from "@/lib/asset-path";
import { isEnglishPath, languageToggleTarget, localizeHref } from "@/lib/en-routes";
import { footer, langFromPath, navGroups, ui } from "@/lib/i18n";
import { useLayout } from "@/components/layout/layout-context";
import { searchDocuments } from "@/lib/search-shared";
import type { SearchDocument } from "@/lib/search-shared";

export const Header = () => {
  const pathname = usePathname() || "/";
  const inEnglish = isEnglishPath(pathname);
  const lang = langFromPath(pathname);
  const { enRoutes } = useLayout();
  const enRouteSet = React.useMemo(() => new Set(enRoutes), [enRoutes]);
  const localize = (href: string) => localizeHref(href, inEnglish, enRouteSet);
  const languageToggle = languageToggleTarget(pathname, enRouteSet);
  const [isOpen, setIsOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  // On touch devices there is no hover, so submenus expand on tap (accordion).
  // Closing the mobile menu also collapses any open submenu.
  const closeMenu = () => {
    setIsOpen(false);
    setOpenGroup(null);
  };
  const toggleGroup = (href: string) =>
    setOpenGroup((current) => (current === href ? null : href));
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);
  const [documents, setDocuments] = React.useState<SearchDocument[]>([]);
  const documentsRequested = React.useRef(false);

  // The search index covers every legacy page (~700KB), so it is fetched once
  // on first focus instead of being embedded into each page.
  const loadSearchDocuments = () => {
    if (documentsRequested.current) return;
    documentsRequested.current = true;
    fetch(assetPath("/search-index.json"))
      .then((response) => response.json())
      .then(setDocuments)
      .catch(() => {
        documentsRequested.current = false;
      });
  };
  const headerSearchResults = searchDocuments(documents, searchQuery).slice(0, 5);
  const showSearchDropdown = isSearchFocused && searchQuery.trim().length > 0;

  return (
    <>
    <header className="relative z-50 bg-white text-[#333] shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <div className="hidden bg-[#071a44] text-[13px] leading-5 text-white lg:block lg:text-[14px]">
        <div className="relative mx-auto flex max-w-[1860px] flex-col gap-y-1.5 px-5 py-3 pr-12 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-8 lg:gap-y-2 lg:px-[30px] lg:py-[18px] lg:pr-[30px]">
          <a className="flex items-center gap-3 hover:text-[#3687aa]" href="tel:+380445285355"><Phone size={18} className="shrink-0 text-white/35" />+38(044)528-53-55, +38(044)528-16-91, +38(044)529-04-94</a>
          <a className="flex items-center gap-3 hover:text-[#3687aa]" href="https://goo.gl/maps/L3ZsN2dDtXbyokkH7"><MapPin size={18} className="shrink-0 text-white/35" />{footer.address[lang]}</a>
          <a className="flex items-center gap-3 hover:text-[#3687aa]" href="mailto:fkgrt@knu.ua"><Mail size={18} className="shrink-0 text-white/35" />fkgrt@knu.ua</a>
          <a className="hover:text-[#3687aa]" href={ui.trustBoxHref[lang]}>{ui.trustBox[lang]}</a>
          <Link className="absolute right-5 top-3 font-bold uppercase hover:text-[#3687aa] lg:static lg:ml-auto" href={languageToggle.href}>{languageToggle.label}</Link>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1200px] items-start justify-center px-4 pb-[24px] pt-[28px] text-center">
        <Link className="absolute left-4 top-4 font-bold uppercase text-[#071a44] hover:text-[#3687aa] lg:hidden" href={languageToggle.href}>{languageToggle.label}</Link>
        <Link href={inEnglish ? "/en" : "/"} className="min-w-0">
          <span className="mb-[18px] flex justify-center gap-3 md:gap-4">
            <img src={assetPath("/images/kgrt.png")} alt="КГРТ" className="h-[88px] w-[88px] object-contain md:h-[102px] md:w-[102px]" />
            <img src={assetPath("/about/gerb.jpg")} alt="КНУ" className="h-[88px] w-[88px] object-contain md:h-[102px] md:w-[102px]" />
          </span>
          <span>
            <span className="block font-serif text-sm italic uppercase leading-none text-[#9a9a9a]">{ui.subdivision[lang]}</span>
            <span className="block font-serif text-[20px] font-black uppercase leading-tight text-[#2d2d2d] md:text-[26px] lg:whitespace-nowrap">{ui.collegeTitle[lang]}</span>
            <span className="block font-serif text-sm italic text-[#9a9a9a] md:text-base">{ui.universityName[lang]}</span>
          </span>
        </Link>
        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 rounded border border-[#071a44] p-2 lg:hidden" onClick={() => (isOpen ? closeMenu() : setIsOpen(true))} aria-expanded={isOpen} aria-label={ui.menu[lang]}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

    </header>
    <nav className={`${isOpen ? "block" : "hidden"} sticky top-0 z-50 border-t border-slate-100 bg-white text-[#2f2f2f] shadow-[0_3px_12px_rgba(0,0,0,0.12)] lg:block`}>
      <div className="mx-auto flex max-w-[1200px] flex-col lg:flex-row lg:items-center lg:justify-center">
        {navGroups.map((group) => (
          <div key={group.href} className="group relative border-b border-slate-100 lg:border-b-0">
            <div className="flex items-center justify-between">
              <Link href={localize(group.href)} onClick={closeMenu} className="flex items-center gap-1 whitespace-nowrap px-4 py-[17px] font-serif text-[18px] font-black hover:text-[#3687aa] xl:px-5 xl:text-[19px]">{group.label[lang]}<ChevronDown size={13} strokeWidth={3} className="hidden lg:inline" /></Link>
              <button type="button" onClick={() => toggleGroup(group.href)} aria-expanded={openGroup === group.href} aria-label={`${group.label[lang]} — ${ui.menu[lang]}`} className="px-4 py-[17px] lg:hidden">
                <ChevronDown size={20} strokeWidth={3} className={`transition-transform ${openGroup === group.href ? "rotate-180" : ""}`} />
              </button>
            </div>
            <div className={`${openGroup === group.href ? "block" : "hidden"} static min-w-72 bg-slate-50 shadow-[0_12px_35px_rgba(10,28,68,0.18)] lg:absolute lg:left-0 lg:top-full lg:bg-white lg:group-hover:block`}>
              {group.items.map((item) => (
                <Link key={item.href} href={localize(item.href)} onClick={closeMenu} className="block border-b border-slate-100 px-5 py-3 text-sm text-slate-700 hover:bg-[#f0c64a] hover:text-[#102c57]">{item.label[lang]}</Link>
              ))}
            </div>
          </div>
        ))}
        <Link href={localize("/gallery")} onClick={closeMenu} className="block whitespace-nowrap border-b border-slate-100 px-4 py-[17px] font-serif text-[18px] font-black hover:text-[#3687aa] lg:border-b-0 xl:px-5 xl:text-[19px]">{ui.gallery[lang]}</Link>
        <Link href="/posts" onClick={closeMenu} className="block whitespace-nowrap border-b border-slate-100 px-4 py-[17px] font-serif text-[18px] font-black hover:text-[#3687aa] lg:border-b-0 xl:px-5 xl:text-[19px]">{ui.news[lang]}</Link>
        <form action={assetPath("/search")} className="relative mx-4 mb-4 flex items-center rounded-xl border border-slate-200 bg-slate-50 pl-4 shadow-inner lg:mx-0 lg:mb-0 lg:ml-4 lg:w-[240px]">
          <label className="sr-only" htmlFor="site-search-header">
            {ui.searchLabel[lang]}
          </label>
          <Search size={16} className="shrink-0 text-[#3687aa]" />
          <input
            id="site-search-header"
            type="search"
            name="q"
            placeholder={ui.searchPlaceholder[lang]}
            value={searchQuery}
            onBlur={() => window.setTimeout(() => setIsSearchFocused(false), 150)}
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={() => {
              setIsSearchFocused(true);
              loadSearchDocuments();
            }}
            className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="mr-1 rounded-lg bg-[#071a44] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#3687aa]"
          >
            OK
          </button>
          {showSearchDropdown && (
            <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-[0_18px_45px_rgba(7,26,68,0.22)]">
              {headerSearchResults.length > 0 ? (
                <>
                  {headerSearchResults.map((result) => (
                    <Link
                      key={result.href}
                      href={result.href}
                      className="block border-b border-slate-100 px-4 py-3 last:border-b-0 hover:bg-[#f8f2dc]"
                      onClick={() => setIsSearchFocused(false)}
                    >
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-[#3687aa]">
                        {result.type === "post" ? ui.resultPost[lang] : ui.resultPage[lang]}
                      </span>
                      <span className="line-clamp-2 text-sm font-bold leading-snug text-[#071a44]">
                        {result.title}
                      </span>
                    </Link>
                  ))}
                  <Link
                    href={`${assetPath("/search")}?q=${encodeURIComponent(searchQuery)}`}
                    className="block bg-[#071a44] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#3687aa]"
                    onClick={() => setIsSearchFocused(false)}
                  >
                    {ui.allResults[lang]}
                  </Link>
                </>
              ) : (
                <div className="px-4 py-3 text-sm text-slate-500">
                  {documents.length === 0 ? ui.loading[lang] : ui.nothingFound[lang]}
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </nav>
    </>
  );
};
