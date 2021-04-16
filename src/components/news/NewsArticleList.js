import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { ArticleCard } from "./NewsArticleCard";
import { getAllArticles, deleteArticle } from "../../modules/NewsArticleManager";
import './NewsArticleList.css';

export const ArticleList = () => {

    const [articles, setArticles] = useState([]);

    let history = useHistory();

    const getArticles = () => {
        return getAllArticles()
            .then(articlesFromAPI => {
                setArticles(articlesFromAPI)
            });
    };

    const handleDeleteArticle = id => {
        deleteArticle(id)
            .then(() => getAllArticles()
                .then(setArticles));
    }

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <>
            <div className="container-cards">
                <h2>News Articles</h2>
                <article className="articles">
                </article>
                <section className="section-content">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => { history.push("/create") }}>
                        Post News Article
                        </button>
                </section>
                {articles.map(article => <ArticleCard
                    key={article.id}
                    article={article}
                    handleDeleteArticle={handleDeleteArticle}
                />).reverse()}
            </div>
        </>
    );
};