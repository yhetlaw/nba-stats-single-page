import type { ReactNode } from "react";
import { Loading } from "./Loading";

type Props = {
  className?: string;
  value?: boolean;
  children: ReactNode;
  id?: string;
};

export const Loader = ({ className, value, children, id }: Props) => {
  if (!value) return <Loading />;
  return (
    <main id={`/#${id}`} className={className}>
      {children}
    </main>
  );
};
