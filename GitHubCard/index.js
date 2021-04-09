/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', ];


axios 

  .get('https://api.github.com/users/Zac-good')
  .then((res) => {
    console.log(`Response:`, res.data);
    const newCard = gitCardMaker(res.data);
    cardsDiv.appendChild(newCard);
    console.log(newCard);


  })
  .catch()

  console.log("check out axios: \n \n", axios);
const result = axios.get("https://api.github.com/users/Zac-good");
console.log(result);
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitCardMaker(gitObj) {
  
  const cardDiv = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const nameH3 = document.createElement('h3')
  const usernameP = document.createElement('p')
  const locationP = document.createElement('p')
  const profileP = document.createElement('p')
  const link = document.createElement('a')
  const followersP = document.createElement('p')
  const followingP = document.createElement('p')
  const bioP = document.createElement('p')

  cardDiv.classList.add('card')
  img.src = gitObj.avatar_url;
  cardInfo.classList.add('card-info')
  nameH3.classList.add('name')
  nameH3.textContent = gitObj.name
  usernameP.classList.add('username')
  usernameP.textContent = gitObj.login;
  locationP.textContent = `Location: ${gitObj.location}`;
  profileP.textContent = `Profile:`;
  link.textContent = `GitHub Profile`
  link.setAttribute('href', `${gitObj.html_url}`)
  followersP.textContent = `Followers: ${gitObj.followers}`
  followingP.textContent = `Following: ${gitObj.following}`
  bioP.textContent = `Bio: ${gitObj.bio}`

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(nameH3);
  cardInfo.appendChild(usernameP);
  cardInfo.appendChild(locationP);
  cardInfo.appendChild(profileP);
  profileP.appendChild(link);
  cardInfo.appendChild(followersP);
  cardInfo.appendChild(followingP); 
  cardInfo.appendChild(bioP);
  
  return cardDiv;
}

const resultDiv = gitCardMaker(result);
const cardsDiv = document.querySelector('div.cards');
cardsDiv.appendChild(resultDiv)
console.log(resultDiv);

followersArray.forEach((item) => {
  axios.get(`https://api.gitHub.com/users/${item}`)
  .then(res => {
    console.log(res)
    cardsDiv.appendChild(gitCardMaker(res.data))
  })
  .catch(err => {
    err = 'error'
    console.log(err)
  })
})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
