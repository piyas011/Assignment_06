import { context } from "@/context/provider";
import { useContext } from "react";

const TodaysPlan = () => {
  const { plan } = useContext(context) as { plan: IData[] };

  console.log(plan, "todays Plan tab ");

  return (
    <div>
      {plan.map((data) => (
        <p key={data.id}>{data.name}</p>
      ))}
    </div>
  );
};

export default TodaysPlan;
