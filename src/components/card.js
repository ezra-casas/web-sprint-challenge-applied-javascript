import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  function createElement(element){
    return document.createElement(element)
  }
  
  const container = createElement('div');
  const headline = createElement('div');
  const author = createElement('div');
  const imgContainer = createElement('div');
  const authorPhoto = createElement('img');
  const authorName = createElement('span');
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


  container.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');


  container.appendChild(headline);
  container.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorPhoto);
  author.appendChild(authorName)

  authorPhoto.src = article.authorPhoto;
  headline.textContent = article.headline;
  authorName.textContent = `By ${article.authorName}`

  container.addEventListener('click', () => {
    console.log(headline.textContent);
  })
  return container;


  
}

const cardAppender = (selector) => {
  const data = document.querySelector(selector);
  axios.get('http://localhost:5000/api/articles')
    .then(response => {
      // create array of the articles:
      const articles = Object.keys(response.data.articles);
      console.log(articles)
      console.log(response.data.articles)
      // loop through array:
      articles.forEach(article => {
        const topic = response.data.articles[article]
        topic.forEach(event => {
          data.appendChild(Card(event))
        })
      })
    })
    
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
