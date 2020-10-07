import React from "react";
import styles from "./ShowNews.module.css";
import PropTypes from "prop-types";

const ShowNews = ({ news }) => {
  // col s12 m6 14

  return (
    <div className={`${styles.container_main} `}>
      {news.map((article) => (
        <div className={`${styles.container_card} card`} key={article.title}>
          <div className={`${styles.img} card-image`}>
            <img src={article.urlToImage} alt="title" />
          </div>
          <div className="card-content">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p> {article.description}</p>
          </div>
          <div className="card-action">
            <a
              href={article.url}
              target="_blank"
              className="waves-effect waves-light btn"
              rel="noopener noreferrer"
            >
              Ver mas
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

ShowNews.propTypes = {
  news: PropTypes.array.isRequired,
};
export default ShowNews;
