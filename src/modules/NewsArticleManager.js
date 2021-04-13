const remoteURL = "http://localhost:3000"

export const getAllArticles = () => {
    return fetch(`${remoteURL}/`)
        .then(result => result.json())
}

export const addArticle = (newArticle) => {
    return fetch(`${remoteURL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
    }).then(response => response.json())
  }