import React from 'react';
import "./ArticleCard.css";
import { Link } from "react-router-dom";

export const ArticleCard = ({ article, handleDeleteArticle }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="articles">
                    <div className="article">
                        <h3>Title <span className="card-articlename">
                            {article.newsTitle}
                        </span></h3>
                        <p>Synopsis: {article.synopsis}</p>
                        <p>URL: {article.url}</p>      
                    </div>
                </div>
            </div>
        </div>
    )
}