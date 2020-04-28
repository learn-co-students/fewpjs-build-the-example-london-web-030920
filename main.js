// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = "";
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


/////////////// my previous code /////////////

// // empty heart finder 
// const emptyHearts = document.querySelectorAll('.like-glyph')
// console.log(emptyHearts)

// // add event listener to each heart
// emptyHearts.forEach(item => {
//   item.addEventListener('click', event => {
//     mimicServerCall() 
//     item.innerText = '❤️'
//   })
// })

// //create mmimicServerCall
// function mimicServerCall(){
//   console.log('hi')

//   fetch(bogusURL)
//   .then(function(response){
//     response.json()
//     item.innerText = '❤️'
//     item.classList.add = "activated-heart"
//   })
// }



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}