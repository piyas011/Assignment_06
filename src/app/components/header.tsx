"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileMenuItem from "./mobileMenuItem";
import { MdClose } from "react-icons/md";

const HeaderSection = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handelToggleMenu = (menuClicked: boolean) => {
    setMenuOpen(menuClicked);
  };

  return (
    <div className="border-b border-[#ffffff3b] py-4 bg-[#3b3b3b] fixed top-0 right-0 left-0 p-5">
      <div className="container mx-auto py-2 flex justify-between items-center text-white ">
        <div>
          <Link className="flex items-center text-2xl font-bold gap-2" href="/">
            <Image src="/favicon.png" alt="Logo" width={35} height={35}></Image>
            FITLOG
          </Link>
        </div>
        <nav className="hidden sm:flex gap-2">
          <Link
            className={`px-4 py-2 ${pathName === "/" ? "bg-[#4a5243] rounded-4xl text-[#C2F800]" : ""}`}
            href="/"
          >
            Workouts
          </Link>
          <Link
            className={`px-4 py-2 ${pathName === "/myPlan" ? "bg-[#4a5243] rounded-4xl text-[#C2F800]" : ""}`}
            href="/myPlan"
          >
            My Plan
          </Link>
        </nav>
        <div className="hidden sm:flex justify-center items-center gap-2">
          <Link href="/myPlan">
            <button className="border px-4 py-1 pr-0.5 cursor-pointer rounded-2xl border-gray-200">
              Plan{" "}
              <span className="bg-[#C2F800] px-2 py-1 rounded-full text-black font-bold ml-2 ">
                0
              </span>
            </button>
          </Link>
          <Link href="/myPlan">
            <button className="border px-4 py-1 pr-0.5 cursor-pointer rounded-2xl border-gray-200">
              Saved{" "}
              <span className="bg-[#C2F800] px-2 py-1 rounded-full text-black font-bold ml-2 ">
                0
              </span>
            </button>
          </Link>
        </div>
        <div
          className="sm:hidden text-white flex justify-end text-2xl cursor-pointer"
          onClick={() => handelToggleMenu(!menuOpen)}
        >
          <div>{menuOpen ? <MdClose /> : <FaBarsStaggered />}</div>
        </div>
      </div>
      {menuOpen === true ? <MobileMenuItem /> : null}
    </div>
  );
};

export default HeaderSection;
