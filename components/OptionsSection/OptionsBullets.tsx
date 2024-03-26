import { FaCheckCircle } from "react-icons/fa";
import React from "react";
import textBreak from "@/utils/textBreak";

interface OptionsBulletsProps {
  bullets?: string[];
}

const OptionsBullets: React.FC<OptionsBulletsProps> = ({ bullets }) => {
  return (
    <>
      <ul className="mb-4 grid whitespace-nowrap grid-cols-3 max-lg:grid-cols-2 font-bold list-none p-0 m-0">
        {bullets?.map((item, index) => (
          <li key={index} className="flex items-center">
            <FaCheckCircle className="text-orange-primary mr-2" />
            <span>
              <p className="m-0">{textBreak(item)}</p>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default OptionsBullets;
