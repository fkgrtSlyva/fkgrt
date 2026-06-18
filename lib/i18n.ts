// Bilingual UI strings + navigation for the site shell. The Ukrainian site is
// the source; English mirrors it. Pages under /en render the English variant.
import { isEnglishPath } from "./en-routes";

export type Lang = "uk" | "en";

export function langFromPath(pathname: string): Lang {
  return isEnglishPath(pathname) ? "en" : "uk";
}

type Bi = { uk: string; en: string };

export type NavGroup = {
  label: Bi;
  href: string;
  items: { label: Bi; href: string }[];
};

export const navGroups: NavGroup[] = [
  {
    label: { uk: "Коледж", en: "College" },
    href: "/about",
    items: [
      { label: { uk: "Про коледж", en: "About the College" }, href: "/about" },
      { label: { uk: "Геологічний музей", en: "Geological Museum" }, href: "/about/museum" },
      { label: { uk: "Адміністрація", en: "Administration" }, href: "/about/administratsiya" },
      { label: { uk: "Публічна інформація", en: "Public Information" }, href: "/about/publichna-informatsiya" },
      { label: { uk: "Спеціальності", en: "Specialties" }, href: "/about/spetsialnosti" },
      { label: { uk: "Співробітництво", en: "Cooperation" }, href: "/about/spivrobitnitstvo" },
      { label: { uk: "Наші випускники", en: "Our Graduates" }, href: "/about/vipuskniki" },
      { label: { uk: "Контакти", en: "Contacts" }, href: "/contacts" },
    ],
  },
  {
    label: { uk: "Освітній процес", en: "Educational Process" },
    href: "/osvita",
    items: [
      { label: { uk: "Освітні програми", en: "Educational Programs" }, href: "/osvita" },
      { label: { uk: "Навчальні плани", en: "Curricula" }, href: "/osvita/navchaliniplan" },
      { label: { uk: "Методичний портал", en: "Methodological Portal" }, href: "/osvita/methodrob2" },
      { label: { uk: "Циклові комісії", en: "Subject Cycle Commissions" }, href: "/osvita/comision" },
      { label: { uk: "Портал навчальних ресурсів", en: "Learning Resources Portal" }, href: "/osvita/portal" },
      { label: { uk: "Електронні ресурси", en: "Electronic Resources" }, href: "/educational/resources" },
      { label: { uk: "Забезпечення якості освіти", en: "Quality Assurance" }, href: "/educational/quality" },
    ],
  },
  {
    label: { uk: "Вступнику", en: "Admissions" },
    href: "/vstup",
    items: [
      { label: { uk: "Вступна кампанія", en: "Admission Campaign" }, href: "/vstup" },
      { label: { uk: "Правила та умови прийому", en: "Admission Rules" }, href: "/vstup/pravila" },
      { label: { uk: "Інформативна сторінка", en: "Information Page" }, href: "/vstup/info" },
      { label: { uk: "Ліцензії. Акредитації", en: "Licenses & Accreditation" }, href: "/vstup/licence" },
      { label: { uk: "Спеціальності", en: "Specialties" }, href: "/vstup/spicial" },
    ],
  },
  {
    label: { uk: "Студенту", en: "Students" },
    href: "/educational",
    items: [
      { label: { uk: "Графіки освітнього процесу", en: "Academic Schedules" }, href: "/educational" },
      { label: { uk: "Розклад занять", en: "Class Timetable" }, href: "/educational/scribble" },
      { label: { uk: "Моніторинг якості освіти", en: "Quality Monitoring" }, href: "/educational/monitoring" },
      { label: { uk: "Рейтингові списки", en: "Rating Lists" }, href: "/educational/rating" },
      { label: { uk: "Психологічна служба", en: "Psychological Service" }, href: "/educational/psychologist" },
      { label: { uk: "STOP! булінг", en: "STOP Bullying" }, href: "/educational/stop" },
      { label: { uk: "Студентське самоврядування", en: "Student Government" }, href: "/educational/selfmanagement" },
    ],
  },
  {
    label: { uk: "Викладачу", en: "Lecturers" },
    href: "/lecturer",
    items: [
      { label: { uk: "Методичний портал", en: "Methodological Portal" }, href: "/osvita/methodrob2" },
      { label: { uk: "Виховна робота", en: "Educational Work" }, href: "/lecturer/educationalwork" },
      { label: { uk: "Портал навчальних ресурсів", en: "Learning Resources Portal" }, href: "/osvita/portal" },
      { label: { uk: "Електронні ресурси", en: "Electronic Resources" }, href: "/educational/resources" },
    ],
  },
];

export const ui = {
  gallery: { uk: "Галерея", en: "Gallery" },
  news: { uk: "Новини", en: "News" },
  searchPlaceholder: { uk: "Пошук", en: "Search" },
  searchLabel: { uk: "Пошук по сайту", en: "Search the site" },
  trustBox: { uk: "Скринька довіри", en: "Trust Box" },
  menu: { uk: "Меню", en: "Menu" },
  resultPage: { uk: "Сторінка", en: "Page" },
  resultPost: { uk: "Новина", en: "News" },
  allResults: { uk: "Всі результати", en: "All results" },
  loading: { uk: "Завантаження...", en: "Loading..." },
  nothingFound: { uk: "Нічого не знайдено", en: "Nothing found" },
  subdivision: { uk: "ВІДОКРЕМЛЕНИЙ СТРУКТУРНИЙ ПІДРОЗДІЛ", en: "SEPARATE STRUCTURAL SUBDIVISION" },
  collegeTitle: { uk: "ФАХОВИЙ КОЛЕДЖ ГЕОЛОГОРОЗВІДУВАЛЬНИХ ТЕХНОЛОГІЙ", en: "PROFESSIONAL COLLEGE OF GEOLOGICAL PROSPECTING TECHNOLOGIES" },
  universityName: { uk: "Київського національного університету імені Тараса Шевченка", en: "Taras Shevchenko National University of Kyiv" },
  trustBoxHref: { uk: "/about/docs/%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%20%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D0%BD%D1%96%20%D0%BF%D0%BE%D1%81%D0%B8%D0%BB%D0%B0%D0%BD%D0%BD%D1%8F%20%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D1%8C%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%B2%D1%96%D1%80%D0%B8.pdf", en: "/about/docs/%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%20%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D0%BD%D1%96%20%D0%BF%D0%BE%D1%81%D0%B8%D0%BB%D0%B0%D0%BD%D0%BD%D1%8F%20%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D1%8C%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%B2%D1%96%D1%80%D0%B8.pdf" },
  breadcrumbHome: { uk: "Головна", en: "Home" },
  notFoundTitle: { uk: "Сторінку не знайдено", en: "Page not found" },
  notFoundText: {
    uk: "На жаль, такої сторінки не існує або її було переміщено.",
    en: "Sorry, this page does not exist or has been moved.",
  },
  notFoundHome: { uk: "На головну", en: "Back to home" },
  galleryLoading: { uk: "Завантаження галереї...", en: "Loading gallery..." },
  archivedPage: {
    uk: "Сторінку збережено у спадковому архіві, але її файл не знайдено у поточній збірці.",
    en: "This page is kept in the legacy archive, but its file was not found in the current build.",
  },
} as const;

export const footer = {
  contacts: { uk: "Контакти", en: "Contacts" },
  usefulLinks: { uk: "Корисні посилання", en: "Useful Links" },
  address: {
    uk: "вул. Василя Тютюнника, 9 (колишня Анрі Барбюса), м. Київ, 03150",
    en: "9 Vasylia Tiutiunnyka St. (former Henri Barbusse), Kyiv, 03150",
  },
  collegeName: {
    uk: "Фаховий коледж геологорозвідувальних технологій",
    en: "Professional College of Geological Prospecting Technologies",
  },
  collegeSub: {
    uk: "Київського національного університету імені Тараса Шевченка",
    en: "Taras Shevchenko National University of Kyiv",
  },
  copyright: {
    uk: 'ВІДОКРЕМЛЕНИЙ СТРУКТУРНИЙ ПІДРОЗДІЛ "ФАХОВИЙ КОЛЕДЖ ГЕОЛОГОРОЗВІДУВАЛЬНИХ ТЕХНОЛОГІЙ КИЇВСЬКОГО НАЦІОНАЛЬНОГО УНІВЕРСИТЕТУ ІМЕНІ ТАРАСА ШЕВЧЕНКА"',
    en: 'SEPARATE STRUCTURAL SUBDIVISION "PROFESSIONAL COLLEGE OF GEOLOGICAL PROSPECTING TECHNOLOGIES OF TARAS SHEVCHENKO NATIONAL UNIVERSITY OF KYIV"',
  },
} as const;

export const usefulLinks: { label: Bi; href: string }[] = [
  { label: { uk: "Міністерство освіти та науки України", en: "Ministry of Education and Science of Ukraine" }, href: "http://mon.gov.ua/" },
  { label: { uk: "Державна служба якості освіти України", en: "State Service of Education Quality of Ukraine" }, href: "https://sqe.gov.ua/" },
  { label: { uk: "Український центр оцінювання якості освіти", en: "Ukrainian Center for Educational Quality Assessment" }, href: "https://testportal.gov.ua/" },
  { label: { uk: "Київський національний університет імені Тараса Шевченка", en: "Taras Shevchenko National University of Kyiv" }, href: "http://univ.kiev.ua/" },
  { label: { uk: 'Навчально-науковий інститут "Інститут геології"', en: 'Educational and Scientific Institute "Institute of Geology"' }, href: "http://www.geol.univ.kiev.ua/ua/" },
  { label: { uk: "НАУКОВО-МЕТОДИЧНИЙ ЦЕНТР ВИЩОЇ ТА ФАХОВОЇ ПЕРЕДВИЩОЇ ОСВІТИ", en: "Scientific and Methodological Center for Higher and Professional Pre-Higher Education" }, href: "https://nmc-vfpo.com/" },
];
