import $ from 'jquery'

$(document).ready(() => {
  // have fun!
})

const fetchPromise = fetch("https://wordwatch-api.herokuapp.com/api/v1/top_word");

// const main = document.getElementById("main");
// const top_word = main.innerHTML;

fetchPromise.then(response => {
  return response.json();
}).then(word => {
  console.log(word);
  // main.innerHTML = word;
  // main.innerHTML = htmlString;
});
