"use client";

import { context } from "@/context/provider";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";

const AddToTodaysPlanButton = ({ data }: { data: IData }) => {
  const { plan, setPlan } = useContext(context) as {
    plan: IData[];
    setPlan: Dispatch<SetStateAction<IData[]>>;
  };
  const isAlreadyAdded = plan.some((item) => item.id === data.id);
  const { planCount, setPlanCount, saveCount, setSaveCount } =
    useContext(context);

  const handelTodaysPlan = () => {
    if (isAlreadyAdded) return;
    setPlan([...plan, data]);
    toast.success("Successfully added Todays Plan!");
    setPlanCount(planCount + 1);
  };

  return (
    <div>
      <button
        disabled={isAlreadyAdded}
        onClick={() => handelTodaysPlan()}
        className={`mr-10 font-bold py-3 px-5 text-[18px] rounded-lg border border-gray-200 flex justify-center items-center gap-2 ${
          isAlreadyAdded
            ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
            : "bg-[#CCFF00] text-black cursor-pointer hover:bg-[#bce600]"
        }`}
      >
        <CiCalendarDate /> Add to today&apos;s plan
      </button>
      <ToastContainer />
    </div>
  );
};

export default AddToTodaysPlanButton;
