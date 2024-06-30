import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ArticleDetail = () => {
  const { index } = useParams();
  const articleFromRedux = useSelector((state) => state.articles.articles[index]);
  const [article, setArticle] = useState(articleFromRedux);

  useEffect(() => {
    // Check if article is found in Redux state
    if (!articleFromRedux) {
      // If not found in Redux state, check localStorage
      const savedArticle = localStorage.getItem(`article-${index}`);
      if (savedArticle) {
        setArticle(JSON.parse(savedArticle));
      }
    } else {
      // If found in Redux state, save it to localStorage
      localStorage.setItem(`article-${index}`, JSON.stringify(articleFromRedux));
    }
  }, [articleFromRedux, index]);

  if (!article) return <div>Article not found</div>;

  return (
    <div className="p-4 sm:flex">
      <div className="sm:mr-4 sm:mt-4">
        <Link to="/" className="text-blue-500 mb-4 inline-block">
          Back to articles
        </Link>
        <img
          src={article.urlToImage}
          alt={"imgErr"}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="sm:ml-4 sm:mt-16">
        <h1 className="text-2xl font-bold mt-4">{article.title}</h1>
        <p className="mt-4">{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleDetail;
