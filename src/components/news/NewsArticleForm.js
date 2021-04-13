import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './NewsArticleForm.css';
import { addArticle } from '../../modules/NewsArticleManager';
import { Link } from "react-router-dom";

export const NewArticleForm = () => {

    const [article, setArticle] = useState ({
        newsTitle: "",
        synopsis: "",
        url: ""
    });

    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory();

    const handleControlledInputChange = (event) => {

        const newArticle = { ...article }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        setArticle(newArticle)
    }

    const handleClickSaveArticle = (event) => {
        event.prevent()

        addArticle(article)
            .then(() => history.push("/news"))
    }

    return (
        <form className="newsArticleForm">
            <h2 className="newsArticleForm_title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">News Article Name:</label>
                    <input type="text" id="newsTitle" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article name" value={article.newsTitle} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">News Article Synopsis:</label>
                    <input type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article synopsis" value={article.synopsis} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">News Article URL:</label>
                    <input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article url" value={article.url} />
                </div>
            </fieldset>
            <Link to={`/`}>
                <button>Back</button>
            </Link>
            <button className="btn btn-primary"
                onClick={handleClickSaveArticle}>
                Save Article
            </button>
        </form>
    )
}