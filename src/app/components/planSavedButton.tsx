"use client";

import { context } from "@/context/provider";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import EmptyPlan from "./emptyPlan";
import TodaysPlan from "./todaysPlan";
import Save from "./save";

const PlanSavedButton = () => {
  const active = " border-[#9ca3af7c]  text-white bg-[#9ca3af56]";
  const { plan, setActiveTab } = useContext(context) as {
    plan: IData[];

    setActiveTab: Dispatch<SetStateAction<"tody" | "save">>;
  };

  const [click, setClick] = useState<"tody" | "save">("tody");
  type clickType = "tody" | "save";

  const handelClickButton = (userClick: clickType) => {
    setClick(userClick);
    setActiveTab(userClick);
  };

  return (
    <div className="w-full">
      {/* Tabs */}
      <div
        className="
      my-6 inline-flex max-w-full
      rounded-[10px]
      bg-[#9ca3af1e]
      p-1.5
      text-[#9CA3AF]

      sm:my-10
    "
      >
        <button
          onClick={() => handelClickButton("tody")}
          className={`
        cursor-pointer rounded-[10px]
        px-4 py-2.5
        text-sm
        transition

        sm:px-8 sm:py-3 sm:text-base

        ${click === "tody" ? active : ""}
      `}
        >
          Today&apos;s Plan
        </button>

        <button
          onClick={() => handelClickButton("save")}
          className={`
        cursor-pointer rounded-[10px]
        px-4 py-2.5
        text-sm
        transition

        sm:px-8 sm:py-3 sm:text-base

        ${click === "save" ? active : ""}
      `}
        >
          Saved
        </button>
      </div>

      {/* Content */}
      <div
        className="
      w-full
      rounded-2xl
      border border-dashed border-[#9ca3af63]
      p-3

      sm:p-4
    "
      >
        <div className="w-full min-w-0">
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
