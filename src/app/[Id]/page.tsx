import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";

const LibraryDetailsPage = async ({ params }: { params: { Id: string } }) => {
  const { Id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${Id}`);
  const data: IData = await res.json();
  const {
    name,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
    description,
    sets,
    reps,
    difficulty,
    instructions,
  } = data;
  // console.log("data", data);

  return (
    <div className="container mx-auto mt-30 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center h-fit ">
      <div className="w-full flex justify-center items-center h-full ">
        <Image
          className="w-full h-full object-cover rounded-4xl"
          src={data.image}
          alt="Images"
          width={300}
          height={300}
        />
      </div>
      <div className="w-full flex justify-center items-center h-full ">
        <div className="">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-gray-200 leading-5 my-4">{description}</p>
          <div className="flex gap-3 mb-5">
            {muscleGroups.map((group) => (
              <p
                className="bg-[#C2F800] text-black font-bold px-3 py-1 rounded-4xl"
                key={group}
              >
                {group}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-5 text-[#9CA3AF] bg-[#1F2937] rounded-3xl p-10 border border-[#80808096]">
            <div className="flex justify-between items-center">
              <p>EQUIPMENT</p>
              <p className="my-2 text-[#9CA3AF]"> {equipment.toUpperCase()}</p>
            </div>
            <hr className=" h-0.5 text-[#80808096]  mb-5" />
            <div className="flex justify-between items-center">
              <p>DIFFICULTY </p>
              <p>{difficulty}</p>
            </div>
            <hr className=" h-0.5 text-[#80808096]  mb-5" />
            <div className="flex justify-between items-center">
              <p>SETS </p>
              <p>{sets}</p>
            </div>
            <hr className=" h-0.5 text-[#80808096]  mb-5" />
            <div className="flex justify-between items-center">
              <p>REPS</p>
              <p>{reps}</p>
            </div>
            <hr className=" h-0.5 text-[#80808096]  mb-5" />
            <div className="flex justify-between items-center">
              <p>DURATION </p>
              <p>{duration}</p>
            </div>
            <hr className=" h-0.5 text-[#80808096]  mb-5" />
            <div className="flex justify-between items-center">
              <p>CALORIES </p>
              <p>{caloriesBurned}</p>
            </div>
            <hr className=" h-0.5 text-[#80808096]  mb-5" />
            <div className="flex justify-between items-center">
              <p>RATING </p>
              <p>{rating}</p>
            </div>
          </div>
          <h3 className=" mt-8 text-2xl font-bold mb-2">INSTRUCTIONS</h3>
          <div>
            {instructions.map((text, i) => (
              <p className="leading-10 text-[#fdfcfc8c]" key={i}>
                {" "}
                {i + 1}. {text}
              </p>
            ))}
          </div>
          <div className="flex  flex-col md:flex-row gap-4 items-center mt-5">
            <button className="mr-10 bg-[#CCFF00] text-black font-bold py-3 px-5 text-[18px] rounded-lg border border-gray-200 flex justify-center items-center gap-2 cursor-pointer">
              <CiCalendarDate /> Add to today&apos;s plan
            </button>
            <button className="mr-10 font-bold py-3 px-5 text-[18px] rounded-lg border border-gray-200 flex justify-center items-center gap-2 cursor-pointer">
              <FaRegBookmark /> Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetailsPage;
