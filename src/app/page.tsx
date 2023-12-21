"use client";

import { useGetAllTeams } from "~/api/teams";
import { Loader } from "~/components/Loader";
import { Matches } from "~/components/Matches";
import { MatchStats } from "~/components/MatchStats";
import { Team } from "~/components/Team";
import { TeamCard } from "~/components/TeamCard";
import { useMatchStore } from "~/stores/teamStore";

export default function HomePage() {
  const { selectedMatchId, selectedTeamId } = useMatchStore();
  const { data: teams, isFetched } = useGetAllTeams();

  return (
    <main className="flex flex-col gap-6 py-2">
      <section
        id="#about"
        className="flex flex-col items-center justify-center"
      >
        <div className="flex w-4/5 flex-col gap-6">
          <h1 className="text-xl font-semibold">Simple NBA stats app</h1>
          <p>Some API stuff might be slow</p>
          <div className="flex flex-col gap-2">
            <p>Created with:</p>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>ShadCN</li>
          </div>
        </div>
      </section>
      <hr />
      {!selectedTeamId && (
        <Loader id="#teams" className="flex justify-center" value={isFetched}>
          <div className="flex w-4/5 flex-col flex-wrap justify-between gap-4 lg:flex-row">
            {teams?.data.map((team) => <TeamCard key={team.id} team={team} />)}
          </div>
        </Loader>
      )}
      {selectedTeamId && !selectedMatchId ? (
        <div className="flex flex-col gap-10">
          <Team />
          <Matches />
        </div>
      ) : (
        <>{selectedMatchId && <MatchStats />}</>
      )}
    </main>
  );
}
