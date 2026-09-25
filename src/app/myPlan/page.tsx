"use client";

import { context } from "@/context/provider";
import PlanSavedButton from "../components/planSavedButton";
import { useContext, useState } from "react";

const MyPlanPage = () => {
  const {
    exercises,
    minutes,
    calories,
    //
    saveExercises,
    saveMinutes,
    saveCalories,
  } = useContext(context) as {
    exercises: number;
    minutes: number;
    calories: number;
    //
    saveExercises: number;
    saveMinutes: number;
    saveCalories: number;
  };

  const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");

  return (
    <div className="mt-25 container mx-auto">
      <h2 className="text-4xl tracking-[-2px] my-4">MY PLAN</h2>
      <p className="text-[16px] text-[#9CA3AF] mb-5">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      {/*////////////////////*/}
      <div className="bg-[#9ca3af1e] rounded-2xl p-4 border border-[#9ca3af36] flex justify-around items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-2">
          <p>Exercises</p>
          <strong className="text-4xl  text-[#CCFF00]">
            {activeTab === "plan" ? exercises : saveExercises}
          </strong>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <p>Minutes</p>
          <strong className="text-4xl ">
            {activeTab === "plan" ? minutes : saveMinutes}
          </strong>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <p>Calories</p>
          <strong className="text-4xl ">
            {activeTab === "plan" ? calories : saveCalories}
          </strong>
        </div>
      </div>
      {/*////////////////////////*/}
      <div>
        <PlanSavedButton />
      </div>
    </div>
  );
};

export default MyPlanPage;
