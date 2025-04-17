"use client";

import {useAppSelector } from "@/app/hooks/useRedux";
import clsx from "clsx"; // Dynamic class'larni to'g'ri ishlatish uchun

const Componen = () => {
  const color = useAppSelector((state) => state.color.color);
  return (
    <section>
      <div className="w-[90%] m-auto mt-[50px]">
        <h2 className="font-[700] leading-[60px] text-[60px] text-center">
          700+ <br />
          Tailwind CSS
          <span
            className={clsx("text-white", {
              "text-gray-100": color === "grey",
              "text-red-600": color === "red",
              "text-blue-500": color === "blue",
              "text-green-500": color === "green",
              "text-orange-500": color === "orange",
            })}
          >
            Components
          </span>
        </h2>
        <h6 className="font-[400]  text-[16px] text-center">
          Based on the Tailwind CSS utility classes, Preline UI's prebuilt
          components and UI <br /> elements help you quickly design and
          customize responsive mobile-first websites.
        </h6>
        <div></div>
      </div>
    </section>
  );
};

export default Componen;
