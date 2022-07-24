import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Минимум 2 символа")
    .max(80, "Максимум 80 символов")
    .required("Обязательное поле")
    .trim(),
  phone: Yup.string().matches(
    /^((\+7|7|8)+([0-9]){10})$/,
    "Не корректно указан телефон"
  ),
  email: Yup.string()
    .email("Не корректная почта")
    .required("Обязательное поле"),
});
