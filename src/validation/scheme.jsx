import { z } from "zod";

export const scheme = z.object({
  fullName: z.string().min(1, "Bu alanı lütfen doldurunuz!"),
  phone: z.number(),
  email: z.string().min(1, "Bu alanı lütfen doldurunuz!"),
  password: z.string().min(1, "Bu alanı lütfen doldurunuz!"),
  gender: z.string().min(1, "Bu alanı lütfen doldurunuz!"),
});
