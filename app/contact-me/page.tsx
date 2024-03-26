import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(dune7.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        className=" w-[50%] relative bg-cover bg-center rounded-xl border border-white flex justify-center "
        style={{ minHeight: "40%" }}
      >
        <div className="relative ml:m-20 w-[90%] md:w-[70%] md:m-10 ms:m-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
