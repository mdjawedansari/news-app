// src/components/CategoryFilter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../features/articlesSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.articles);
// console.log(category);
  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <div className="mb-4">
      <label htmlFor="category">Category: </label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="general">All</option>
        <option value="jsonplaceholder">JsonPlaceHolder</option>
        <option value="rutrum">Rutrum</option>
        <option value="ipsum">Ipsum</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default CategoryFilter;
