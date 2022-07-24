import { Alert } from "../types/additional";

export const SUCCESS_CONTACT_ALERT: Alert = {
  open: true,
  status: "success",
  text: "Ваша заявка успешно оставлена, в ближайшее время с вами свяжется менеджер",
};
export const ERROR_CONTACT_ALERT: Alert = {
  open: true,
  status: "error",
  text: "При выполнении запроса произошла ошибка, повторите позже",
};
