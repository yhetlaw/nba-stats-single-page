"use client";
import Image from "next/image";
import Link from "next/link";
import { useMatchStore } from "~/stores/teamStore";

import logo from "../../public/images/logo.png";

export const Navigation = () => {
  const { setSelectedMatchId, setSelectedTeamId } = useMatchStore();

  const resetIds = () => {
    setSelectedMatchId(0);
    setSelectedTeamId(0);
  };

  return (
    <div className="sticky top-0 z-10 mb-10 flex w-full justify-center bg-white py-4 shadow-lg">
      <div className="auto flex w-[80%] items-center justify-between">
        <Link href="/#teams" className="w-28" onClick={resetIds}>
          <Image src={logo} alt="logo" priority />
        </Link>
        <div className="flex gap-4">
          <Link
            href="/#teams"
            className="rounded-xl px-10 py-6 hover:bg-slate-50"
            onClick={resetIds}
          >
            Teams
          </Link>
          <Link
            href="/#about"
            className="rounded-xl px-10 py-6 hover:bg-slate-50"
            onClick={resetIds}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};
