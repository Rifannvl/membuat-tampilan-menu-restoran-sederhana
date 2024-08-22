import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const [recipes, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  function getRecipes() {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result.recipes);
        setLoading(false);
      });
  }
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div
      className={`container ${theme === "light" ? "bg-white" : "bg-slate-800"}`}
    >
      <button
        className="btn border p-3 dark:text-white"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        toggle theme
      </button>
      <div className="grid grid-cols-4 gap-3">
        {loading ? (
          <div className="flex gap-3 absolute h-screen w-screen items-center justify-center">
            <div className="loader border border-sky-600 animate-spin size-10 rounded-xl"></div>{" "}
            <p>Loading...</p>{" "}
          </div>
        ) : null}
        {recipes?.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
}
