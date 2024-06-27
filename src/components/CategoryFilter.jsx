// Catgory filteer page

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, fetchArticles, setPage } from "../features/articlesSlice";

const categories = [
  { label: "All", value: "general" },
  { label: "Business", value: "business" },
  { label: "Technology", value: "technology" },
  { label: "Entertainment", value: "entertainment" },
];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { category, page } = useSelector((state) => state.articles);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    dispatch(setCategory(selectedCategory));
    dispatch(setPage(1)); // Reset to the first page on category change
    dispatch(fetchArticles({ category: selectedCategory, page: 1 }));
  };

  return (
    <div className="flex items-center w-56 border-2 mb-4">
      <label
        htmlFor="category"
        className="block text-sm font-medium text-gray-700 mr-10"
      >
        Category
      </label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={handleCategoryChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
