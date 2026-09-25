"use client";

import { createContext, ReactNode, useState } from "react";

export const context = createContext({});

const Provider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [planCount, setPlanCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);
  //   console.log(plan, "main provider plan");
  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
    planCount,
    setPlanCount,
    saveCount,
    setSaveCount,
  };

  return <context.Provider value={sharedData}>{children}</context.Provider>;
};

export default Provider;
