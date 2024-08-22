import React from "react";

export default function RecipeCard({
  id,
  name,
  reviewCount,
  image,
  rating,
  mealType,
}) {
  return (
    <div className="container ">
      <div className=" border rounded-lg p-4 ">
        <h5 className="text-lg font-bold text-gray-800 py-5 dark:text-white">
          {id}{" "}
        </h5>
        <img src={image} alt="" className="rounded-lg" />
        <h3 className="text-2xl  py-5 dark:text-white">{name} </h3>
        <p className="text-gray-500  py-5 dark:text-white">
          {rating} {reviewCount}
        </p>
        <p className="text-gray-500  py-5 dark:text-white">{mealType}</p>
      </div>
    </div>
  );
}
