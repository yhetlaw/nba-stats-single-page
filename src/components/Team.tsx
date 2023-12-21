"use client";

import { useEffect, useState } from "react";
import { useGetAllStats } from "~/api/stats";
import { useGetTeam } from "~/api/teams";
import { useMatchStore } from "~/stores/teamStore";

import { Loader } from "./Loader";

export const Team = () => {
  const { selectedTeamId } = useMatchStore();

  const [page, setPage] = useState(0);

  const { data: team, isFetched } = useGetTeam(selectedTeamId?.toString());
  const { data: stats } = useGetAllStats({
    year: new Date().getFullYear(),
    quantity: 100,
    page,
  });

  const teamStats = stats?.data.filter((stat) => stat.team.id === team?.id);

  const teamPlayers = teamStats?.map(
    (stat) => `${stat.player.first_name} ${stat.player.last_name}`,
  );

  if (stats && teamPlayers?.length === 0 && page < stats?.meta.total_pages) {
    setPage((prev) => prev + 1);
  }

  useEffect(() => {
    setPage(0);
  }, []);

  return (
    <Loader
      id="a"
      className="flex flex-col items-center justify-center"
      value={isFetched}
    >
      <div className="flex w-4/5 flex-col gap-4">
        <h1 className="text-3xl font-semibold">{team?.name}</h1>
        <div className="flex justify-between bg-slate-100 p-6">
          <div className="flex flex-wrap gap-6">
            <div>
              <span className="font-semibold">Team: </span>
              {team?.full_name}
            </div>
            <div>
              <span className="font-semibold">City: </span>
              {team?.city}
            </div>
            <div>
              <span className="font-semibold">Abbreviation: </span>
              {team?.abbreviation}
            </div>
            <div>
              <span className="font-semibold">Conference: </span>
              {team?.conference}
            </div>
            <div>
              <span className="font-semibold">Division: </span>
              {team?.division}
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold">Players</h2>
        <div className="flex flex-wrap gap-4">
          {teamPlayers && teamPlayers?.length > 0 ? (
            teamPlayers?.map((player) => <li key={player}>{player}</li>)
          ) : (
            <div className="h-10 w-10 animate-spin rounded-full border-t-4 border-blue-500"></div>
          )}
        </div>
      </div>
    </Loader>
  );
};
