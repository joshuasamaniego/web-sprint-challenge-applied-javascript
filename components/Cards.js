// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardsContainer = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-api.herokuapp.com/articles/")
  .then((res) => {
    const articles = res.data.articles;
    // console.log(articles);
    const bootstrap = articles.bootstrap;
    // console.log(bootstrap);
    const javascript = articles.javascript;
    const jquery = articles.jquery;
    const nodejs = articles.node;
    const technology = articles.technology;

    // Rendering ALL articles from each topic

    bootstrap.forEach((subData) => {
      const bootstrapName = subData.authorName;
      const bootstrapArticleHeadline = subData.headline;
      const bootstrapAuthorImage = subData.authorPhoto;
      // console.log(name, articleHeadline, authorImage);
      cardsContainer.appendChild(
        cardMaker(bootstrapName, bootstrapArticleHeadline, bootstrapAuthorImage)
      );
    });
    javascript.forEach((subData) => {
      const javascriptName = subData.authorName;
      const javascriptArticleHeadline = subData.headline;
      const javascriptAuthorImage = subData.authorPhoto;
      // console.log(name, headline, authorImage);
      cardsContainer.appendChild(
        cardMaker(
          javascriptName,
          javascriptArticleHeadline,
          javascriptAuthorImage
        )
      );
    });
    jquery.forEach((subData) => {
      const jqueryName = subData.authorName;
      const jqueryArticleHeadline = subData.headline;
      const jqueryAuthorImage = subData.authorPhoto;
      // console.log(name, headline, authorImage);
      cardsContainer.appendChild(
        cardMaker(jqueryName, jqueryArticleHeadline, jqueryAuthorImage)
      );
    });
    nodejs.forEach((subData) => {
      const nodejsName = subData.authorName;
      const nodejsArticleHeadline = subData.headline;
      const nodeAuthorImage = subData.authorPhoto;
      // console.log(name, headline, authorImage);
      cardsContainer.appendChild(
        cardMaker(nodejsName, nodejsArticleHeadline, nodeAuthorImage)
      );
    });
    technology.forEach((subData) => {
      const technologyName = subData.authorName;
      const technologyArticleHeadline = subData.headline;
      const technologyAuthorImage = subData.authorPhoto;
      // console.log(name, headline, authorImage);
      cardsContainer.appendChild(
        cardMaker(
          technologyName,
          technologyArticleHeadline,
          technologyAuthorImage
        )
      );
    });
  })
  .catch((err) => {
    console.log("Something Went Wrong", err);
  });

function cardMaker(name, articleHeadline, authorImage) {
  // Creating Elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorsName = document.createElement("span");
  // Creating DOM Hierarchy
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(authorsName);
  // Adding Classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");
  // Adding Content and Attributes
  headline.textContent = articleHeadline;
  image.setAttribute("src", authorImage);
  authorsName.textContent = `By: ${name}`;

  // Adding Event Listener
  card.addEventListener("click", () => {
    console.log(articleHeadline);
  });
  // Return Statement
  return card;
}
