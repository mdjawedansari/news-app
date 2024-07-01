import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ArticleDetail = () => {
  const { id } = useParams();
  const articleFromRedux = useSelector((state) => state.articles.articles[id]);
  const [article, setArticle] = useState(articleFromRedux);
// console.log(article);
  useEffect(() => {
    // Check if article is found in Redux state
    if (!articleFromRedux) {
      // If not found in Redux state, check localStorage
      const savedArticle = localStorage.getItem(`article-${id}`);
      if (savedArticle) {
        setArticle(JSON.parse(savedArticle));
      }
    } else {
      // If found in Redux state, save it to localStorage
      localStorage.setItem(`article-${id}`, JSON.stringify(articleFromRedux));
    }
  }, [articleFromRedux, id]);

  if (!article) return <div>Article not found</div>;

  return (
    <div className="w-full p-4 md:flex">
      <div className="w-full md:mr-4 md:mt-4">
        <Link to="/" className="text-blue-500 mb-4 inline-block">
          Back to articles
        </Link>
        <img
          src={article?.image}
          alt={"imgErr"}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="w-full md:ml-4 md:mt-16">
        <h1 className="text-2xl font-bold mt-4">{article?.title}</h1>
        <p className="mt-4">{article?.content}</p>
      </div>
    </div>
  );
};

export default ArticleDetail;
