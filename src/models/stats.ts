import { z } from "zod";

import { meta } from "./miscellaneous";

export const statSchema = z.object({
  id: z.number(),
  ast: z.number().nullish(),
  blk: z.number().nullish(),
  dreb: z.number().nullish(),
  fg3_pct: z.number().nullish(),
  fg3a: z.number().nullish(),
  fg3m: z.number().nullish(),
  fg_pct: z.number().nullish(),
  fga: z.number().nullish(),
  fgm: z.number().nullish(),
  ft_pct: z.number().nullish(),
  fta: z.number().nullish(),
  ftm: z.number().nullish(),
  game: z.object({
    id: z.number().nullish(),
    date: z.string(),
    home_team_id: z.number(),
    home_team_score: z.number(),
    period: z.number().nullish(),
    postseason: z.boolean(),
    season: z.number().nullish(),
    status: z.string(),
    time: z.string().nullish(),
    visitor_team_id: z.number().nullish(),
    visitor_team_score: z.number().nullish(),
  }),
  min: z.string().nullish(),
  oreb: z.number().nullish(),
  pf: z.number().nullish(),
  player: z.object({
    id: z.number().nullish(),
    first_name: z.string(),
    height_feet: z.number().nullish(),
    height_inches: z.number().nullish(),
    last_name: z.string(),
    position: z.string(),
    team_id: z.number().nullish(),
    weight_pounds: z.number().nullish(),
  }),
  pts: z.number().nullish(),
  reb: z.number().nullish(),
  stl: z.number().nullish(),
  team: z.object({
    id: z.number().nullish(),
    abbreviation: z.string(),
    city: z.string(),
    conference: z.string(),
    division: z.string(),
    full_name: z.string(),
    name: z.string(),
  }),
  turnover: z.number().nullish(),
});

export const statsSchema = z.object({
  data: statSchema.array(),
  meta,
});

export type TStats = z.infer<typeof statSchema>;
