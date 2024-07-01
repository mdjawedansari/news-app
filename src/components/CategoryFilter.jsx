// // src/components/CategoryFilter.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCategory } from '../features/articlesSlice';

// const CategoryFilter = () => {
//   const dispatch = useDispatch();
//   const { category } = useSelector((state) => state.articles);

//   const handleCategoryChange = (event) => {
//     dispatch(setCategory(event.target.value));
//   };

//   return (
//     <div className="mb-4">
//       <label htmlFor="category">Category: </label>
//       <select id="category" value={category} onChange={handleCategoryChange}>
//         <option value="general">All</option>
//         <option value="business">Business</option>
//         <option value="technology">Technology</option>
//         <option value="entertainment">Entertainment</option>
//         {/* Add more categories as needed */}
//       </select>
//     </div>
//   );
// };

// export default CategoryFilter;
