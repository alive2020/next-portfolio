"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center justify-between "
        style={{
          backgroundColor: "#141414",
        }}
      >
        <div className="pl-10 sm:pl-40 md:pl-38 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] ">
          <h1 className="text-[50px] text-white font-semibold">
            Hi, I&apos;m Ice{" "}
            <p className="text-transparent bg-clip-text bg-gradient-to-r  from-red-100 to-[#9EF500] ">
              Frontend Engineer
            </p>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Passionate about crafting immersive digital experiences that
            captivate and inspire. <br />
            Let&apos;s create something exceptional together.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1-vIbWi9EIU0RLw69cnvWwMWCYLmIh5Jl/view?usp=sharing"
              className="resumeBtn rounded-[20px] group relative px-5 py-3 text-lg text-gray-800 max-w-[200px]"
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
              className=" rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Hire me
            </Link>
          </div>
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 right-0  h-[90%] w-[35%] mr-40 sm:h-[60%] sm:mr-5 md:h-[80%] md:mr-40">
          <Image
            src="/myImg.jpg"
            alt=""
            layout="responsive"
            width={600}
            height={920}
            className="hidden md:block "
          />
        </div>
      </div>

      <div className="absolute flex  bottom-20 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="resumeBtn rounded-[20px] group px-5 py-3 text-lg text-white w-[160px] max-w-[200px] "
        >
          Resume
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white w-[160px] max-w-[200px] group-hover:opacity-20"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white w-[160px] max-w-[200px] hover:opacity-10"
        >
          Hire me
        </Link>
      </div>
    </main>
  );
}
