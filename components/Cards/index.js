// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const card1 =(items)=>{
  const card = document.createElement('div')
  card.classList.add('card')

  const cardHeadline = document.createElement('div')
  cardHeadline.classList.add('headline')
  card.appendChild(cardHeadline)

  const cardAuthor = document.createElement('div')
  cardAuthor.classList.add('author')
  card.appendChild(cardAuthor)

  const cardImg = document.createElement('div')
  cardImg.classList.add('img-container')
  cardAuthor.appendChild(cardImg)

  const authorsName = document.createElement('span') 
  cardAuthor.appendChild(authorsName)

  cardHeadline.textContent = items.headline;
  cardImg.src = items.authorPhoto;
    authorsName.textContent = items.authorName;


  return card;
}

const newsCards = document.querySelector('.cards-container');

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const theseKeys = Object.keys(response.data.articles);

        theseKeys.forEach(a => {
            response.data.articles[a].forEach(items => {
                console.log(response.data)
                const chosenCard = card1(items);
                newsCards.appendChild(chosenCard);
            })
        })
    })
    .catch(err => {
        console.log('oops!', err)
    });