/*
Public API Repo
https://github.com/public-apis/public-apis
*/

const cat = document.querySelector(".cat");
const fox = document.querySelector(".fox");
const dog = document.querySelector(".dog");

const catButton = document.querySelector(".get-cat");
const foxButton = document.querySelector(".get-fox");
const dogButton = document.querySelector(".get-dog");

// - get Random Cat Images
const getRandomCat = () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      const catImageUrl = data[0].url;
      cat.innerHTML = `<img src="${catImageUrl}" />`;
    });
};

// - get Random Fox Images
const getRandomFox = async () => {
  const res = await fetch("https://randomfox.ca/floof/");
  const data = await res.json();
  const foxImageUrl = data.image;
  fox.innerHTML = `<img src="${foxImageUrl}" />`
};

// - get Random Fox Images
const getRandomDog = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const data = await res.json();
  const dogImageUrl = data.url;
  dog.innerHTML = `<img src="${dogImageUrl}" />`;
}

catButton.addEventListener("click", getRandomCat);
foxButton.addEventListener("click", getRandomFox);
dogButton.addEventListener("click", getRandomDog);
