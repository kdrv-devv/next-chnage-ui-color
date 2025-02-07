"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RxMoon } from "react-icons/rx";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [theme, setlocalTheme] = useState("light");

  return (
    <header className="header backdrop-blur-md z-10 border-b-[1px] sticky top-0">
      <div className="w-[95%] m-auto  flex items-center justify-between">
        <div className="header-left flex items-center gap-6 py-4">
          <Link href={"/"}>
            <h1 className="font-[600] text-[18px]">Shadcn UI Pro</h1>
          </Link>
          <div className="links flex items-center gap-6 text-[15px] text-[#6d6d6a]">
            <Link href={"/docs"}>
              <h1 className="hover:text-[#a2a29f]">Docs</h1>
            </Link>
            <Link href={"/compon"}>
              <h1 className="hover:text-[#a2a29f]">Components</h1>
            </Link>
            <Link href={"/themes"}>
              <h1 className="hover:text-[#a2a29f]">Themes</h1>
            </Link>
            <Link href={"/examples"}>
              <h1 className="hover:text-[#a2a29f]">Examples</h1>
            </Link>
            <Link href={"/blocks"}>
              <h1 className="hover:text-[#a2a29f]">Blocks</h1>
            </Link>
          </div>
        </div>
        <div className="header-right flex items-center gap-2 text-[18px]">
          <button className="w-[30px] h-[30px] transition-all flex items-center justify-center rounded-md hover:bg-[#55555377]">
            <FaGithub />
          </button>
          <button className="w-[30px] h-[30px] transition-all flex items-center justify-center rounded-md hover:bg-[#55555377]">
            <FaXTwitter />
          </button>

          {theme == "light" ? (
            <button
              className="w-[30px] h-[30px] transition-all flex items-center justify-center rounded-md hover:bg-[#55555377]"
              onClick={() => {
                setTheme("light"), setlocalTheme("dark");
              }}
            >
              <RxMoon />
            </button>
          ) : (
            <button
              className="w-[30px] h-[30px] transition-all flex items-center justify-center rounded-md hover:bg-[#55555377]"
              onClick={() => {
                setTheme("dark"), setlocalTheme("light");
              }}
            >
              <IoSunnyOutline />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
