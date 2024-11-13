"use client";
import React from "react";
import { useEffect, useState } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const data = await fetchMealIdeas(ingredient);
    console.log(data);
    setMeals(data);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="text-white">
      <header className="text-2xl ">Meal Ideas</header>
      {meals?.map((meal) => (
        <div key={meal.idMeal} className="p-2 bg-[#131435] my-2">
          <h1 className="text-lg ">{meal.strMeal}</h1>
        </div>
      ))}
    </div>
  );
};

export default MealIdeas;
