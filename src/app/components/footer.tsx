import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-[#ffffff3b] py-4 bg-[#3b3b3b] mt-5 flex justify-between items-center gap-10">
      <div>
        <Link href="/" className="flex justify-center items-center gap-2">
          <Image src="/favicon.png" width={20} height={20} alt="Icon" />
          FITLOG
        </Link>
      </div>
      <div>
        <p className="text-[14px] text-[#ffffff98] flex gap-2 flex-wrap justify-end">
          <span> © 2026 FitLog — </span>
          <span>Workout Library.</span>
          <span> Train hard, log honest.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
