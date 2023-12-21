import { useQuery } from "react-query";

import { playersSchema } from "../models/player";
import { http } from "./http";

const getAllPlayers = async () => {
  const response = await http.get(`${process.env.NEXT_PUBLIC_API_URL}/players`);
  return playersSchema.parse(await response.data);
};

export const useGetAllPlayers = () => {
  return useQuery({
    queryKey: "all-players",
    queryFn: () => getAllPlayers(),
  });
};
