import { z } from "zod";

import { meta } from "./miscellaneous";

export const player = z.object({
  id: z.number(),
  first_name: z.string(),
  height_feet: z.number().nullish(),
  height_inches: z.number().nullish(),
  last_name: z.string(),
  position: z.string(),
  team: z.object({
    id: z.number(),
    abbreviation: z.string(),
    city: z.string(),
    conference: z.string(),
    division: z.string(),
    full_name: z.string(),
    name: z.string(),
  }),
  weight_pounds: z.number().nullish(),
});

export const playersSchema = z.object({
  data: player.array(),
  meta,
});
