import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getAllArticles } from "../../modules/NewsArticleManager";
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

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <>
            <div className="container-cards">
                <section className="section-content">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => { history.push("/create") }}>
                            Post News Article
                        </button>
                </section>
            </div>
        </>
    );
};