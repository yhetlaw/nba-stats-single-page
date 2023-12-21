import { z } from "zod";

import { meta } from "./miscellaneous";

export const matchSchema = z.object({
  id: z.number(),
  date: z.string(),
  home_team: z.object({
    id: z.number(),
    abbreviation: z.string(),
    city: z.string(),
    conference: z.string(),
    division: z.string(),
    full_name: z.string(),
    name: z.string(),
  }),
  home_team_score: z.number(),
  period: z.number(),
  postseason: z.boolean(),
  season: z.number(),
  status: z.string(),
  time: z.string(),
  visitor_team: z.object({
    id: z.number(),
    abbreviation: z.string(),
    city: z.string(),
    conference: z.string(),
    division: z.string(),
    full_name: z.string(),
    name: z.string(),
  }),
  visitor_team_score: z.number(),
});

export const matchesSchema = z.object({
  data: matchSchema.array(),
  meta,
});

export type TMatches = z.infer<typeof matchSchema>;
