"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId: string | undefined = process.env.NEXT_PUBLIC_SERVICE_ID || "";
const templateId: string | undefined =
  process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
const publicKey: string | undefined = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          setSuccess(true);
          form.current?.reset();
        },
        () => {
          setError(true);
        }
      );
    } else {
      setError(true);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3 text-black">
        <input
          type="text"
          placeholder="Your name"
          name="user_name"
          className="w-full px-3 py-2 text-sm text-black-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="w-full px-3 py-2 text-sm text-black-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Your message"
          name="user_message"
          className="w-full px-3 py-2 text-sm text-black-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button
        type="submit"
        className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded-[5px]"
      >
        Send a message
      </button>
      {success && (
        <p className="text-white font-semibold">
          Your message has been sent successfully!
        </p>
      )}
      {error && (
        <p className="text-red-600 font-semibold">Something went wrong!</p>
      )}
    </form>
  );
};

export default ContactForm;
