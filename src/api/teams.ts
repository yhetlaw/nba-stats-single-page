import { useQuery } from "react-query";
import { teamSchema, teamsSchema } from "~/models/team";

import { http } from "./http";

const getAllTeams = async () => {
  const response = await http.get(`${process.env.NEXT_PUBLIC_API_URL}/teams`);
  return teamsSchema.parse(await response.data);
};

export const useGetAllTeams = () => {
  return useQuery({
    queryKey: "all-teams",
    queryFn: () => getAllTeams(),
  });
};

const getTeam = async (id?: string) => {
  if (!id) return;
  const response = await http.get(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}`,
  );
  return teamSchema.parse(await response.data);
};

export const useGetTeam = (id?: string) => {
  return useQuery({
    queryKey: "team",
    queryFn: () => getTeam(id),
  });
};
