import { context } from "@/context/provider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaCheck, FaClock, FaFire, FaStar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import EmptyPlan from "./emptyPlan";

const Save = () => {
  const { save } = useContext(context) as { save: IData[] };

  return (
    <div className="space-y-3">
      {save.length === 0 ? (
        <EmptyPlan />
      ) : (
        <div>
          {save.map((data) => (
            <div
              key={data.id}
              className="mb-3 rounded-lg bg-[#ffffff0e] p-3 sm:p-4"
            >
              {/* Main Content */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* Image */}
                <div className="h-44 w-full shrink-0 overflow-hidden rounded-md sm:h-28 sm:w-36 md:h-30 md:w-44 lg:w-50">
                  <Image
                    src={data.image}
                    width={100}
                    height={70}
                    alt={data.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Workout Information */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-xl font-bold uppercase text-white sm:text-xl md:text-2xl">
                    {data.name}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-300 sm:text-base">
                    {data.equipment}
                  </p>

                  {/* Stats */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[#CCFF00]" />
                      {data.duration}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaFire className="text-[#CCFF00]" />
                      {data.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                      <FaStar className="text-[#CCFF00]" />
                      {data.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#ffffff1c] pt-3 sm:justify-end">
                <Link
                  href={`/${data.id}`}
                  className="rounded-2xl border border-zinc-200 px-3 py-1.5 text-sm text-white transition hover:border-zinc-500 sm:text-base"
                >
                  View Details
                </Link>

                <button className="flex items-center gap-1 rounded-md bg-[#CCFF00] px-3 py-1.5 text-sm font-bold text-black transition hover:bg-[#b8e600] sm:text-base">
                  <FaCheck />
                  <span>Mark as Done</span>
                </button>

                <button className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-zinc-200 transition hover:bg-red-500/10 hover:text-red-400">
                  <IoClose className="text-2xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Save;
