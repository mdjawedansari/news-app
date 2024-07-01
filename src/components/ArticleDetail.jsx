import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ArticleDetail = () => {
  const { index } = useParams();
  const articleFromRedux = useSelector((state) => state.articles.articles[index]);
  const [article, setArticle] = useState(articleFromRedux);

  useEffect(() => {
    if (!articleFromRedux) {
      const savedArticle = JSON.parse(localStorage.getItem(`article-${index}`));
      if (savedArticle) {
        setArticle(savedArticle);
      }
    } else {
      localStorage.setItem(`article-${index}`, JSON.stringify(articleFromRedux));
    }
  }, [articleFromRedux, index]);

  if (!article) return <div>Article not found</div>;

  return (
    <div className="w-full p-4 md:flex">
      <div className="w-full md:mr-4 md:mt-4">
        <Link to="/" className="text-blue-500 mb-4 inline-block">
          Back to articles
        </Link>
        <img
          src={article.image}
          alt="Article Image"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="w-full md:ml-4 md:mt-16">
        <h1 className="text-2xl font-bold mt-4">{article.title}</h1>
        <p className="mt-4">{article.content}</p>
      </div>
    </div>
  );
};

export default ArticleDetail;
