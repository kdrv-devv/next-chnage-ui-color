"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks/useRedux";
import { changeColor } from "@/app/redux/color-slice";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { LuPaintbrushVertical } from "react-icons/lu";
import clsx from "clsx"; // Dynamic class'larni to'g'ri ishlatish uchun


const Showcase = () => {

  const color = useAppSelector((state) => state.color.color); 
  const dispatch = useAppDispatch();

  return (
    <section className="showcase">
      <div className="container w-[90%] m-auto flex items-center justify-around mt-[100px]">
        <div className="showcase-left flex flex-col gap-4">
          <h2 className="font-[700] text-[48px] ">
           <span className={clsx("text-white", { 
              "text-gray-100": color === "grey",
              "text-red-600": color === "red",
              "text-blue-500": color === "blue",
              "text-green-500": color === "green",
              "text-orange-500": color === "orange",
            })} > Shadcn </span>UI Pro <br /> Ship your startup rapidly
          </h2>
          <h5 className="font-[300] text-[28px] w-[60%]">
            Elegant, Simple, and Powerful NextJS boilerplate with ll you need to
            build your SaaS.
          </h5>
          {/* radio group */}
          <RadioGroup
            onValueChange={(value) => {dispatch(changeColor(value))}}
            className="flex items-center gap-5"
            defaultValue="grey"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="w-[30px] h-[30px]   bg-[#52525b] border-none"
                value="grey"
                id="r1"
              />
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="w-[30px] h-[30px]  bg-[#e11d48]"
                value="red"
                id="r2"
              />
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="w-[30px] h-[30px]  bg-[#3b82f6]"
                value="blue"
                id="r3"
              />
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="w-[30px] h-[30px]  bg-[#22c55e]"
                value="green"
                id="r4"
              />
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="w-[30px] h-[30px]  bg-[#ea580c]"
                value="orange"
                id="r5"
              />
            </div>

            <Button className="flex items-center gap-2">
              <LuPaintbrushVertical /> Customize
            </Button>
          </RadioGroup>

          <div className="flex items-center gap-5 ">
            <Button className={clsx("text-white", { 
              "bg-gray-500": color === "grey",
              "bg-red-500": color === "red",
              "bg-blue-500": color === "blue",
              "bg-green-500": color === "green",
              "bg-orange-500": color === "orange",
            })}>Get started</Button>
            <Button className="bg-black border-2">
              git clone shad-cn-ui-pro
            </Button>
          </div>
        </div>
        <div className="showcase-right">
          <Calendar className={clsx("text-white", { 
              "text-gray-100": color === "grey",
              "text-red-600": color === "red",
              "text-blue-500": color === "blue",
              "text-green-500": color === "green",
              "text-orange-500": color === "orange",
            })} />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
