// // src/components/Pagination.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setPage } from '../features/articlesSlice';

// const Pagination = () => {
//   const dispatch = useDispatch();
//   const { page } = useSelector((state) => state.articles);

//   const handlePrevious = () => {
//     if (page > 1) {
//       dispatch(setPage(page - 1));
//     }
//   };

//   const handleNext = () => {
//     dispatch(setPage(page + 1));
//   };

//   return (
//     <div className="flex justify-between mt-4">
//       <button onClick={handlePrevious} disabled={page === 1}>
//         Previous
//       </button>
//       <span>Page {page}</span>
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default Pagination;
