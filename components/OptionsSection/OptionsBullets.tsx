import { FaCheckCircle } from "react-icons/fa";
import React from "react";

interface OptionsBulletsProps {
  bullets?: string[];
}

const OptionsBullets: React.FC<OptionsBulletsProps> = ({ bullets }) => {
  return (
    <>
      <ul className="mb-4 grid whitespace-nowrap grid-cols-3 font-bold list-none p-0 m-0">
        {bullets?.map((item, index) => (
          <li key={index} className="flex gap-4">
            <FaCheckCircle className="text-orange-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default OptionsBullets;
