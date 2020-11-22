import React from "react";
import './News.css';

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h2 className="news__title">{data.title}</h2>
      <p className="news__desc">{data.description}</p>
      <url className="news__author">{data.url}</url> <br />
      <img className="news__image" src={data.urlToImage} ></img> <br />
      
      <span className="news__author">{data.author}</span> <br />
      <h3 className="news__published">{data.publishedAt}</h3> <br />
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;