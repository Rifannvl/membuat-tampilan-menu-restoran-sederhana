import React from "react";
import ReactImg from "../assets/react.svg";

export default function PriceCard({
  price = "0",
  title = "default",
  description = "default",
  points = ["default1", "default2", "default3"],
}) {
  return (
    <div className=" border rounded-lg p-4">
      <p className="text-sm text-gray-500">
        <span className="text-3xl text-green-700 font-bold"> {price}</span>
        /month
      </p>
      <h3 className="text-2xl font-bold text-green-700 py-5">{title}</h3>
      <p className="text-gray-500 text-lg py-5">{description}</p>
      <ul>
        {points.map((point, index) => (
          <li
            className="text-gray-500 text-md flex gap-3 py-2 items-center"
            key={index}
          >
            <img src={ReactImg} alt="" className="w-4 h-4" /> {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
