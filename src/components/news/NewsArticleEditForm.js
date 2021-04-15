import React, { useState, useEffect } from "react";
import { updateArticle, getArticleById } from "../../modules/NewsArticleManager";
import "./NewsArticleForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const ArticleEditForm = () => {
    const [article, setArticle] = useState({ newsTitle: "", synopsis: "" });
    const [isLoading, setIsLoading] = useState(false);

    const { articleId } = useParams();
    const history = useHistory();

    const handleFieldChange = event => {
        const stateToChange = { ...article };
        stateToChange[event.target.id] = event.target.value;
        setArticle(stateToChange);
    };

    const updateExistingArticle = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedArticle = {
            id: articleId,
            newsTitle: article.newsTitle,
            synopsis: article.synopsis,
            url: article.url,
            timestamp: article.timestamp,
            userId: article.userId
        };
        console.log(editedArticle)

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
                <h2 className="editForm_title">Edit News Article</h2>
                <fieldset>
                    <div className="formgrid">
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
                            <button>Back</button>
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