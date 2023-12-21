import { z } from "zod";

import { meta } from "./miscellaneous";

export const teamSchema = z.object({
  id: z.number(),
  abbreviation: z.string(),
  city: z.string(),
  conference: z.string(),
  division: z.string(),
  full_name: z.string(),
  name: z.string(),
});

export const teamsSchema = z.object({
  data: teamSchema.array(),
  meta,
});

export type TTeam = z.infer<typeof teamSchema>;
