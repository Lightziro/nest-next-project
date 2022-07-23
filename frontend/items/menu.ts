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
    label: "Проекты",
    value: "/projects",
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
export { HEADER_ITEMS, FOOTER_ITEMS, ADVANTAGE_ITEMS };
