import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <Link href="/">
        <h1 className="text-white text-[25px] font-semibold">
          Ice{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r  from-zinc-400 to-red-500">
            {" "}
            Dev{" "}
          </span>
        </h1>
      </Link>
      <div className="flex items-center gap-5 mb-2">
        {Socials.map((social, index) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.src}
              key={social.name}
              alt={social.name}
              width={28}
              height={28}
              className="transition duration-300 ease-in-out transform hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
