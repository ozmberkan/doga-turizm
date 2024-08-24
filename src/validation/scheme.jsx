import { z } from "zod";

export const scheme = z.object({
  fullName: z.string(),
  phone: z.number(),
  email: z.string(),
  password: z.string(),
  gender: z.string(),
});
