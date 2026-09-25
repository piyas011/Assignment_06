"use client";

import { context } from "@/context/provider";
import { useContext, useState } from "react";
import EmptyPlan from "./emptyPlan";
import TodaysPlan from "./todaysPlan";
import Save from "./save";

const PlanSavedButton = () => {
  const active = " border-[#9ca3af7c]  text-white bg-[#9ca3af56]";
  const { plan } = useContext(context) as { plan: IData[] };

  const [click, setClick] = useState<"tody" | "save">("tody");
  type clickType = "tody" | "save";

  const handelClickButton = (userClick: clickType) => {
    setClick(userClick);
  };

  return (
    <div>
      <div className="my-10 bg-[#9ca3af1e] inline-block  rounded-[10px] text-[#9CA3AF] p-1.5 ">
        <button
          onClick={() => handelClickButton("tody")}
          className={` py-3 px-8 rounded-[10px] cursor-pointer  ${click === "tody" ? active : ""}`}
        >
          Today&apos;s Plan
        </button>
        <button
          onClick={() => handelClickButton("save")}
          className={` py-3 px-8 rounded-[10px] cursor-pointer  ${click === "save" ? active : ""}`}
        >
          Saved
        </button>
      </div>
      <div
        className={`border border-dashed rounded-2xl border-[#9ca3af63] p-4`}
      >
        <div>
          {plan.length === 0 ? (
            <EmptyPlan />
          ) : click === "tody" ? (
            <TodaysPlan />
          ) : (
            <Save />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanSavedButton;
