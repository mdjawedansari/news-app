// src/components/ArticleDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ArticleDetail = () => {
  const { index } = useParams();
  const article = useSelector((state) => state.articles.articles[index]);

  if (!article) return <div>Article not found</div>;

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500 mb-4 inline-block">Back to articles</Link>
      <img src={article.urlToImage} alt={"imgErr"} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-2xl font-bold mt-4">{article.title}</h1>
      <p className="mt-4">{article.description}</p>
    </div>
  );
};

export default ArticleDetail;
