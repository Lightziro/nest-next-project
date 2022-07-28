import { Item, UIItem } from "../ts/types/additional";
import { AdvantageItem } from "../components/section/main/about-company/children/AdvantageItem";

const HEADER_ITEMS: Item[] = [
  {
    label: "Компания",
    value: "/",
  },
  {
    label: "Услуги",
    value: "/services",
  },
  {
    label: "Контакты",
    value: "/contacts",
  },
];
const FOOTER_ITEMS: Item[] = [
  {
    label: "О компании",
    value: "/about",
  },
  {
    label: "Контакты",
    value: "/contacts",
  },
];
const ADVANTAGE_ITEMS: UIItem[] = [
  {
    img: "/images/icons/animation/calendar.gif",
    title: "Срок выполнения",
    description:
      "Мы ценим ваше время и всегда укладываемся в срок выполнения задачи",
  },
  {
    img: "/images/icons/animation/computer.gif",
    title: "Современные технологии",
    description:
      "Наши решения и продукты строятся на основе современных технологиях",
  },
];
const CONTACT_ITEMS: UIItem[] = [
  {
    title: "E-mail",
    description: "ithub-company@yandex.ru",
  },
  {
    title: "Телефон",
    description: "+7 (953) 693-00-70",
  },
  {
    title: "Адрес",
    description: "610017, г.Киров, ул.Карла Либкнехта, 106, оф.2",
  },
];
const SUPPORT_ITEMS = [
  "Устранение недочётов в работе сайта;",
  "Оптимизация и доработка модулей;",
  "Управление и резервирование данных.",
];
const WEBSITE_ITEMS = [
  "Использование современных технологий, которые легко оптимизируются;",
  "Оптимизация и доработка модулей;",
  "Своевременное выполнение требуемых работ.",
];
export {
  HEADER_ITEMS,
  FOOTER_ITEMS,
  ADVANTAGE_ITEMS,
  CONTACT_ITEMS,
  SUPPORT_ITEMS,
  WEBSITE_ITEMS,
};
