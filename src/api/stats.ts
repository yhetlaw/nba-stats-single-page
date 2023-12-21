import { useQuery } from "react-query";
import { statsSchema } from "~/models/stats";

import { http } from "./http";

const getAllStats = async (options: {
  id?: string;
  page?: number;
  quantity?: number;
  year?: number;
}) => {
  const { page, quantity, id, year } = options;
  const response = await http.get(
    `${process.env.NEXT_PUBLIC_API_URL}/stats?page=${page ?? 0}&per_page=${
      quantity ?? 8
    }${id ? `&game_ids[]=${id}` : ""}${year ? `&dates[]=${year}-02-10` : ""}`,
  );
  return statsSchema.parse(await response.data);
};

export const useGetAllStats = (options: {
  id?: string;
  page?: number;
  quantity?: number;
  year?: number;
}) => {
  return useQuery({
    queryKey: ["all-stats", options.id, options.page, options.quantity],
    queryFn: () => getAllStats(options),
  });
};
