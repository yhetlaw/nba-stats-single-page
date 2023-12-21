import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useTableStore } from "~/stores/tableStore";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type { ColumnDef, SortingState } from "@tanstack/react-table";
type Props<TData, TValue> = {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
  onMatchClick?: () => void;
};

export const DataTable = <TData, TValue>({
  data,
  columns,
  onMatchClick,
}: Props<TData, TValue>) => {
  const { setSelectedRow } = useTableStore();

  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="w-4/5 overflow-y-auto rounded-lg border bg-white p-10 ">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer px-3"
                  >
                    <div className="flex items-center gap-4">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      <span>
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === "desc" ? (
                            <ChevronDown aria-label="sorted descending" />
                          ) : (
                            <ChevronUp aria-label="sorted ascending" />
                          )
                        ) : null}
                      </span>
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className={`${
                onMatchClick ? "cursor-pointer" : ""
              } hover:bg-slate-100`}
              onClick={() => {
                setSelectedRow(row.id);
                onMatchClick && onMatchClick();
              }}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
