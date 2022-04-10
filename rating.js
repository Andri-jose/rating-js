
const rating = document.getElementById('numbers_container');
const button = document.querySelectorAll(".numbers");
const submit = document.getElementById('send');

/* you get the rating number when you click on the numbers and save it in the local storage*/
rating.addEventListener ("click", answer)
function answer(e) {
  sessionStorage.setItem('numberRating',e.target.getAttribute("rate"))
};


/*you add color to the number when you click on it, in the same time use for each to remove the color in the others numbers*/
button.forEach( Element => {
    Element.addEventListener ("click", answerButton)
});

function answerButton(e) {
  button.forEach(Element => {
    Element.classList.remove("activeB");
  });
  e.target.classList.add("activeB") 
};


/*yout get the score on the other page when you click send*/
submit.addEventListener ("click", send)
function send(e) {
  const score = sessionStorage.getItem('numberRating')
  
  if (score >= 1){
      location.href = "thanks.html";
  }
    else {
      alert("You need to select a score first")
    }
}