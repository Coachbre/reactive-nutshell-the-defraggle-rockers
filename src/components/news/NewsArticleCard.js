import React from 'react';
import "./NewsArticleCard.css";
import { Link } from "react-router-dom";

export const ArticleCard = ({ article, handleDeleteArticle }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="articles">
                    <div className="article">
                        <h3><span className="card-articlename">
                            {article.newsTitle}
                        </span></h3>
                        <p>Synopsis: {article.synopsis}</p>
                        <p>URL:</p><a href={article.url}>{article.url}</a>
                        <p>Timestamp: {article.timestamp}</p>
                        <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}