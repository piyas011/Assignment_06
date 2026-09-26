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
          {" "}
          {save.map((data) => (
            <div
              key={data.id}
              className="flex items-center gap-3 rounded-lg bg-[#ffffff0e] p-2.5"
            >
              {/* Image */}
              <div className="h-30 w-50 shrink-0 overflow-hidden rounded-md mr-3">
                <Image
                  src={data.image}
                  width={100}
                  height={70}
                  alt={data.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Workout Information */}
              <div className=" flex-1">
                <h3 className="truncate text-2xl font-bold uppercase text-white ">
                  {data.name}
                </h3>

                <p className="">{data.equipment}</p>

                {/* Stats */}
                <div className="mt-1 flex items-center gap-4 text-zinc-400">
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

              {/* Actions */}
              <div className="flex shrink-0 items-center gap-4">
                <Link
                  href={`/${data.id}`}
                  className="rounded-2xl border border-zinc-200 px-2.5 py-1.5 text-white transition hover:border-zinc-500"
                >
                  View Details
                </Link>

                <button className="flex items-center gap-1 rounded-md bg-[#CCFF00] px-2.5 py-1.5  font-bold text-black transition hover:bg-[#b8e600] cursor-pointer">
                  <FaCheck className="mx-2" />
                  Mark as Done
                </button>

                <button className="text-zinc-200 transition hover:text-red-400 cursor-pointer">
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
