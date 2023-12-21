import { z } from "zod";

export const meta = z.object({
  total_pages: z.number(),
  current_page: z.number(),
  next_page: z.number().nullish(),
  per_page: z.number(),
  total_count: z.number(),
});
