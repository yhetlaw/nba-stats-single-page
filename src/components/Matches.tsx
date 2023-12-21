"use client";

import { useState } from "react";
import { useGetAllMatches } from "~/api/matches";
import { DataTable } from "~/components/DataTable";
import { Loader } from "~/components/Loader";
import { Pagination } from "~/components/Pagination";
import { useTableStore } from "~/stores/tableStore";
import { useMatchStore } from "~/stores/teamStore";

import type { ColumnDef } from "@tanstack/react-table";
import type { TMatches } from "~/models/match";

export const Matches = () => {
  const { setSelectedMatchId, selectedTeamId } = useMatchStore();
  const { selectedRow } = useTableStore();
  const [page, setPage] = useState(1);
  const { data: matches, isFetching } = useGetAllMatches(
    selectedTeamId?.toString(),
    page,
  );

  const columns: ColumnDef<TMatches>[] = [
    {
      accessorKey: "home_team.name",
      header: "Home team",
    },
    {
      accessorKey: "home_team_score",
      header: "Score",
    },
    {
      accessorKey: "visitor_team.name",
      header: "Visitor team",
    },
    {
      accessorKey: "visitor_team_score",
      header: "Score",
    },
    {
      accessorKey: "status",
      header: "Type",
    },
    {
      accessorKey: "season",
      header: "Year",
    },
  ];

  return (
    <Loader className="flex flex-col items-center gap-4" value={!isFetching}>
      <h2 className="w-4/5 text-xl font-semibold">Matches</h2>
      {matches && (
        <>
          <DataTable
            columns={columns}
            data={matches.data}
            onMatchClick={() =>
              setSelectedMatchId(matches.data[Number(selectedRow)]?.id)
            }
          />
          <Pagination
            page={page}
            setPage={setPage}
            disabled={matches.meta.current_page === matches.meta.total_pages}
          />
        </>
      )}
    </Loader>
  );
};
