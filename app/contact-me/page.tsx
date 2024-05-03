import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{
        backgroundColor: "#141414",
      }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <div className="w-full flex justify-between flex-col sm:flex-row mx-10 sm:mx-40 ">
        <div className="w-full sm:w-[40%] flex flex-col mb-10 sm:mb-0">
          <h3 className="text-white text-[22px] text-bold mb-5">
            Open to New Possibilities
          </h3>
          <p className="text-[#DBE2E3] text-[14px]">
            I&apos;m currently seeking new opportunities and would love to
            connect. Whether you have a question or simply want to chat, feel
            free to reach out.
            <br /> I&apos;ll do my best to respond as quickly as possible!
          </p>
        </div>

        <div className="w-full sm:w-[60%] ml-0 sm:ml-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
