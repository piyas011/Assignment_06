import Link from "next/link";

const EmptyPlan = () => {
  return (
    <div className="flex justify-center items-center h-100 flex-col">
      <h2 className="text-4xl tracking-[-2px] ">NOTHING HERE YET</h2>
      <p className="text-[#9CA3AF] my-4">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="text-black py-2 px-8 bg-[#C2F800] rounded-2xl cursor-pointer"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyPlan;
