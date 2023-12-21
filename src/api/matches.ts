import { useQuery } from "react-query";
import { matchesSchema } from "~/models/match";

import { http } from "./http";

const getAllMatches = async (teamId?: string, page?: number) => {
  const response = await http.get(
    `${process.env.NEXT_PUBLIC_API_URL}/games?page=${page ?? 0}&per_page=8${
      teamId ? `&team_ids[]=${teamId}` : ""
    }`,
  );
  return matchesSchema.parse(await response.data);
};

export const useGetAllMatches = (teamId?: string, page?: number) => {
  return useQuery({
    queryKey: ["all-games", teamId, page],
    queryFn: () => getAllMatches(teamId, page),
  });
};
