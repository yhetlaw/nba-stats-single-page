import type { TTeam } from "~/models/team";
import { useMatchStore } from "~/stores/teamStore";

export const TeamCard = ({ team }: { team: TTeam }) => {
  const { setSelectedTeamId } = useMatchStore();

  return (
    <div
      className="w-full cursor-pointer rounded-2xl bg-slate-100 p-10 hover:bg-slate-200 lg:w-[45%]"
      onClick={() => setSelectedTeamId(team.id)}
    >
      <div className="flex items-baseline gap-2">
        <h2 className="text-xl font-bold text-red-700">{team.name}</h2>
        <span className="font-bold ">{team.full_name}</span>
        <span className="text-gray-400 ">| {team.abbreviation}</span>
      </div>
      <div className="flex gap-2">
        <div>{team.city}</div>
        <div>{team.conference}</div>
        <div>{team.division}</div>
      </div>
    </div>
  );
};
