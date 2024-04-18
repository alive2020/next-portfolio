"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/dune3.jpg)",
        }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Hi, I&apos;m Ice{" "}
            <p className="text-transparent bg-clip-text bg-gradient-to-r  from-red-100 to-indigo-400 ">
              {" "}
              Frontend Engineer{" "}
            </p>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Passionate about crafting immersive digital experiences that
            captivate and inspire. Let&apos;s create something exceptional
            together.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="#"
              target="_blank"
              className="rounded-[20px] group relative bg-purple-400 hover:bg-purple-900 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Resume
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-20 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-purple-400 hover:bg-purple-900  px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Resume
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>
      <div
        className="absolute bottom-[30%] right-[5%]  z-[10] bg-gradient-to-b 
       from-gray-500 rounded-full overflow-hidden mt-5 md:h-72 md:w-72"
      >
        <Image
          src="/myImg.png"
          alt=""
          width={400}
          height={400}
          className="hidden md:block"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-[10]"
      />
    </main>
  );
}
