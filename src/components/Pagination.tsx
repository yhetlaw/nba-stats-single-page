import { Button } from "@/components/ui/button";

type Props = {
  page: number;
  setPage: (page: number) => void;
  disabled?: boolean;
};

export const Pagination = ({ page, setPage, disabled }: Props) => {
  return (
    <div className="flex gap-4">
      <Button
        className="flex w-28 justify-center rounded-xl bg-slate-100 p-4 hover:bg-slate-200"
        onClick={() => (page > 1 ? setPage(page - 1) : null)}
      >
        Previous
      </Button>
      <Button
        className="flex w-28 justify-center rounded-xl bg-slate-100 p-4 hover:bg-green-200 disabled:bg-red-100"
        onClick={() => setPage(page + 1)}
        disabled={disabled}
      >
        Next
      </Button>
    </div>
  );
};
