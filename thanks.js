
const container = document.querySelector(".selected_container");
const rating = sessionStorage.getItem('numberRating')


let score = document.createElement("P");
score.innerHTML = `You selected ${rating} out of 5`;
container.appendChild(score); 

console.log(container)  