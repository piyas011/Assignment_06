import Image from "next/image";
import AddToTodaysPlanButton from "../components/addToTodaysPlanButton";
import AddToSaveButton from "../components/addToSaveButton";

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
    <div className="container mx-auto mt-20 grid h-fit grid-cols-1 gap-6 px-4 sm:px-6 lg:mt-30 lg:grid-cols-2 lg:px-0">
      {/* Image */}
      <div className="flex h-full w-full items-center justify-center">
        <Image
          className="h-auto max-h-150 w-full rounded-3xl object-cover sm:rounded-4xl"
          src={data.image}
          alt="Images"
          width={300}
          height={300}
        />
      </div>

      <div className="flex h-full w-full items-center justify-center">
        <div className="w-full">
          <h1 className="text-3xl font-bold sm:text-4xl">{name}</h1>

          <p className="my-4 text-sm leading-6 text-gray-200 sm:text-base sm:leading-7">
            {description}
          </p>

          <div className="mb-5 flex flex-wrap gap-2 sm:gap-3">
            {muscleGroups.map((group) => (
              <p
                className="rounded-4xl bg-[#C2F800] px-3 py-1 text-sm font-bold text-black sm:text-base"
                key={group}
              >
                {group}
              </p>
            ))}
          </div>

          {/* Workout Information */}
          <div className="flex flex-col gap-4 rounded-3xl border border-[#80808096] bg-[#1F2937] p-5 text-sm text-[#9CA3AF] sm:gap-5 sm:p-6 md:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <p>EQUIPMENT</p>
              <p className="text-right">{equipment.toUpperCase()}</p>
            </div>

            <hr className="border-[#80808096]" />

            <div className="flex items-center justify-between gap-4">
              <p>DIFFICULTY</p>
              <p>{difficulty}</p>
            </div>

            <hr className="border-[#80808096]" />

            <div className="flex items-center justify-between gap-4">
              <p>SETS</p>
              <p>{sets}</p>
            </div>

            <hr className="border-[#80808096]" />

            <div className="flex items-center justify-between gap-4">
              <p>REPS</p>
              <p>{reps}</p>
            </div>

            <hr className="border-[#80808096]" />

            <div className="flex items-center justify-between gap-4">
              <p>DURATION</p>
              <p>{duration}</p>
            </div>

            <hr className="border-[#80808096]" />

            <div className="flex items-center justify-between gap-4">
              <p>CALORIES</p>
              <p>{caloriesBurned}</p>
            </div>

            <hr className="border-[#80808096]" />

            <div className="flex items-center justify-between gap-4">
              <p>RATING</p>
              <p>{rating}</p>
            </div>
          </div>

          {/* Instructions */}
          <h3 className="mb-2 mt-8 text-xl font-bold sm:text-2xl">
            INSTRUCTIONS
          </h3>

          <div>
            {instructions.map((text, i) => (
              <p
                className="text-sm leading-7 text-[#fdfcfc8c] sm:text-base sm:leading-10"
                key={i}
              >
                {i + 1}. {text}
              </p>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <AddToTodaysPlanButton data={data} />
            <AddToSaveButton data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetailsPage;
