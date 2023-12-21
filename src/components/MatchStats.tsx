"use client";

import { ChevronLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useGetAllStats } from "~/api/stats";
import { useGetTeam } from "~/api/teams";
import { DataTable } from "~/components/DataTable";
import { Loader } from "~/components/Loader";
import { Pagination } from "~/components/Pagination";
import { useMatchStore } from "~/stores/teamStore";

import type { ColumnDef } from "@tanstack/react-table";

import type { TStats } from "~/models/stats";
export const MatchStats = () => {
  const { setSelectedMatchId, setSelectedTeamId } = useMatchStore();

  const [page, setPage] = useState(1);

  const matchId = useParams().matchId as string;
  const { data: stats, isFetched } = useGetAllStats({
    id: matchId,
    page,
  });

  const homeTeamId = stats?.data[0]?.game.home_team_id.toString();
  const { data: homeTeam, isFetched: isHomeTeamFetched } =
    useGetTeam(homeTeamId);

  const visitorTeamId = stats?.data[0]?.game.visitor_team_id?.toString();
  const { data: visitorTeam } = useGetTeam(visitorTeamId);

  const columns: ColumnDef<TStats>[] = [
    {
      accessorKey: "player.first_name",
      header: "Name",
    },
    {
      accessorKey: "team.name",
      header: "Team",
    },
    {
      accessorKey: "pts",
      header: "Points",
    },
    {
      accessorKey: "fgm",
      header: "Field goals",
    },
    {
      accessorKey: "ftm",
      header: "Free throws",
    },
    {
      accessorKey: "reb",
      header: "Rebounces",
    },
    {
      accessorKey: "ast",
      header: "Assists",
    },
    {
      accessorKey: "stl",
      header: "Steals",
    },
    {
      accessorKey: "blk",
      header: "Blocks",
    },
  ];

  return (
    <Loader
      className="flex flex-col items-center gap-4"
      value={isFetched && isHomeTeamFetched}
    >
      <div className="flex w-[80%] gap-4">
        <ChevronLeft
          onClick={() => {
            setSelectedMatchId(null);
            setSelectedTeamId(null);
          }}
          className="cursor-pointer"
        />
        <div className="flex gap-2">
          {homeTeam?.full_name ?? (
            <div className="text-gray-400">Loading...</div>
          )}
          <span className="font-semibold">
            {stats?.data[0]?.game.home_team_score}
          </span>
        </div>
        -
        <div className="flex gap-2">
          <span className="font-semibold">
            {stats?.data[0]?.game.visitor_team_score}
          </span>
          {visitorTeam?.full_name ?? (
            <div className="text-gray-400">Loading...</div>
          )}
        </div>
      </div>
      {stats && (
        <>
          <DataTable columns={columns} data={stats?.data} />
          <Pagination
            page={page}
            setPage={setPage}
            disabled={stats.meta.current_page === stats.meta.total_pages}
          />
        </>
      )}
    </Loader>
  );
};
