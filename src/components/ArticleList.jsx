// src/components/ArticleList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../features/articlesSlice';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import CategoryFilter from './CategoryFilter';

const ArticleList = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector((state) => state.articles);
  
  useEffect(() => {
    dispatch(fetchArticles({ category, page }));
  }, [dispatch, category, page]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  // Filter out articles that don't have an image
  // const filteredArticles = articles.filter(
  //   (article) => article.urlToImage && article.title && article.description
  // )

  return (
    <div className="container mx-auto px-4">
      <CategoryFilter />
      <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="border rounded-lg p-4">
            <img src={article.urlToImage} alt={"imgErr"} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2 line-clamp-2">{article.title}</h2>
            <p className="mt-2 line-clamp-3">{article.description}</p>
            <Link to={`/article/${index}`} className="text-blue-500 mt-2 inline-block">
              Read more
            </Link>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ArticleList;
