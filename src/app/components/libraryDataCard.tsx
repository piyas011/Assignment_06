import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { PiFireSimpleFill } from "react-icons/pi";

interface IDataPropsTypes {
  data: IData;
}

const LibraryDataCard = ({ data }: IDataPropsTypes) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = data;
  return (
    <div className="bg-[#ffffff1c] rounded-4xl border border-[#80808096]  h-fit">
      <div className="w-full h-70">
        <Image
          className="w-full h-full object-cover rounded-t-4xl col-span-2"
          src={image}
          alt={name}
          width={200}
          height={200}
        />
      </div>
      <div className="p-5 col-span-1 ">
        <div className="flex gap-3 my-2">
          {muscleGroups.map((group) => (
            <p
              className="bg-[#C2F800] text-black font-bold px-3 py-1 rounded-4xl"
              key={group}
            >
              {group}
            </p>
          ))}
        </div>
        <h2 className="text-[20px] font-bold">{name.toUpperCase()}</h2>
        <p className="my-2 text-[#9CA3AF]">{equipment}</p>
        <hr className=" h-0.5 text-[#80808096]  mb-5" />
        <div className="flex gap-5 text-[#9CA3AF]">
          <p className="flex justify-center items-center gap-2">
            <IoMdTime /> {duration} min
          </p>
          <p className="flex justify-center items-center gap-2">
            <PiFireSimpleFill /> {caloriesBurned} kcal
          </p>
          <p className="flex justify-center items-center gap-2">
            {" "}
            <FaRegStar />
            {rating}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LibraryDataCard;
