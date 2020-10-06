import React from "react";

const ShowNews = ({ news }) => {
  return (
    <div>
      {news.map((article) => (
        <div key={article.title}>
          <p>{article.author}</p>
          <p> {article.content}</p>
          <p> {article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowNews;
