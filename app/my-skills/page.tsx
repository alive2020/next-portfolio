"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  const firstLineSkills = SkillData.slice(0, 7);
  const secondLineSkills = SkillData.slice(7);

  return (
    <div
      style={{
        backgroundColor: "#141414",
      }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-[#9EF500]">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[85%]"
        >
          {firstLineSkills.map((skill, index) => (
            <SwiperSlide key={index} className="self-center">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                style={{ aspectRatio: "1/1" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[85%]"
        >
          {secondLineSkills.map((skill, index) => (
            <SwiperSlide key={index} className="self-center">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                style={{ aspectRatio: "1/1" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
