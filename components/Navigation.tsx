"use client";
import React, { useEffect, useState } from "react";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

import { usePathname } from "next/navigation";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <div
      style={{ left: "20%" }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-around items-center border bg-black border-white px-2 py-7"
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          className="mb-16 "
          data-tip={nav.name}
          data-tooltip-id="nav-tooltip"
          data-tooltip-content={nav.name}
          data-tooltip-place="top"
        >
          <nav.icon
            data-for="registerTip"
            className={`w-[24px] h-[24px] ${
              path === nav.link ? "text-[#9EF500]" : "text-white"
            } hover:scale-110`}
          />
        </Link>
      ))}
      <Tooltip id="nav-tooltip" />
    </div>
  );
};

export default Navigation;
