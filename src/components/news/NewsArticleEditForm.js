import React, { useState, useEffect } from "react";
import { updateArticle, getArticleById } from "../../modules/NewsArticleManager";
import "./NewsArticleForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const ArticleEditForm = () => {
    const [article, setArticle] = useState({ newsTitle: "", synopsis: "" });
    const [isLoading, setIsLoading] = useState(false);

    const { articleId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...article };
        stateToChange[evt.target.id] = evt.target.value;
        setArticle(stateToChange);
    };

    const updateExistingArticle = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedArticle = {
            id: articleId,
            title: article.newsTitle,
            synopsis: article.synopsis
        };

        updateArticle(editedArticle)
            .then(() => history.push("/")
            )
    }

    useEffect(() => {
        getArticleById(articleId)
            .then(article => {
                setArticle(article);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formGrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="newsTitle"
                            value={article.newsTitle}
                        />
                        <label htmlFor="newsTitle">Title</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="synopsis"
                            value={article.synopsis}
                        />
                        <label htmlFor="synopsis">Synopsis</label>
                    </div>
                    <div className="alignRight">
                        <Link to={"/"}>
                            Back
                        </Link>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingArticle}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}