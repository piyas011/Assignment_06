"use client";
import { context } from "@/context/provider";
import Link from "next/dist/client/link";
import { useContext } from "react";

const MobileMenuItem = () => {
  const { planCount, saveCount } = useContext(context) as {
    planCount: number;
    saveCount: number;
  };
  return (
    <div>
      <div className="bg-[#3B3B3B] rounded-2xl text-white p-4 ">
        <nav className="flex flex-col  gap-5 ">
          <Link className="px-4 py-2 border border-white rounded-lg" href="/">
            Workouts
          </Link>
          <Link
            className="px-4 py-2 border  border-white rounded-lg"
            href="/myPlan"
          >
            My Plan
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex justify-around gap-4 mt-4">
          <Link href="/myPlan">
            <button className="border px-4 py-1 pr-0.5 cursor-pointer rounded-2xl border-gray-200">
              Plan{" "}
              <span className="bg-[#C2F800] px-2 py-1 rounded-full text-black font-bold ml-2 ">
                {planCount}
              </span>
            </button>
          </Link>
          <Link href="/myPlan">
            <button className="border px-4 py-1 pr-0.5 cursor-pointer rounded-2xl border-gray-200">
              Saved{" "}
              <span className="bg-[#C2F800] px-2 py-1 rounded-full text-black font-bold ml-2 ">
                {saveCount}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuItem;
