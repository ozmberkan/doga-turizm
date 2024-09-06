import { z } from "zod";

export const registerscheme = z.object({
  displayName: z.string().min(1, "Bu alanı lütfen doldurunuz!"),
  phoneNumber: z.string(),
  email: z.string().min(1, "Bu alanı lütfen doldurunuz!"),
  password: z.string().min(1, "Bu alanı lütfen doldurunuz!"),
});

export const loginscheme = z.object({
  email: z.string().email("Geçerli bir email adresi giriniz!"),
  password: z.string().min(6, "Parola en az 6 karakter olmalıdır!"),
});

export const filterscheme = z.object({
  departure: z.string().min(1, "Bir Seçim Yapmalısınız"),
  arrival: z.string().min(1, "Bir Seçim Yapmalısınız"),
  date: z.string().min(1, "Bir Seçim Yapmalısınız"),
});
