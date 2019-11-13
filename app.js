//select html element
const form = document.querySelector("#feedback-form");
const feedbackList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-feedbacks");
const filter = document.querySelector("#filter");
const feedbackInput = document.querySelector("#feedback");
const nameInput = document.querySelector("#name");
const rateInput = document.querySelector("#rate");
const items = document.querySelectorAll("ul.collectionli.collection-item");



//load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
  //adding feedback event
  form.addEventListener("submit", addFeedback);
}

//create and add a div to the body
function createDiv (name = 'Yasmin', rate='5',feedback='feedback text') {
  const divContainer = document.createElement("div");
  divContainer.className = 'container-newdiv';
  feedbackList.appendChild(divContainer);

  const h2Name = document.createElement('h2');
  h2Name.appendChild(document.createTextNode(name))
  divContainer.appendChild(h2Name)

  const pRate = document.createElement('p');
  pRate.className='rate';
  pRate.appendChild(document.createTextNode(`${Math.min(5,rate)}/5`))
  divContainer.appendChild(pRate)

  const pFeedback = document.createElement('p');
  pFeedback.appendChild(document.createTextNode(feedback))
  divContainer.appendChild(pFeedback)
}

function addFeedback(e) {
  e.preventDefault();
  if(feedbackInput.value === "") {
    alert("Add a Feedback");
  }

  createDiv(nameInput.value, rateInput.value, feedbackInput.value);

  //refresh
  form.reset();

 //changed the feedback style by alternating the colours
  const containerEven = document.querySelectorAll(".container-newdiv:nth-child(even)");
  for (let i = 0; i < containerEven.length; i++) {
    containerEven[i].style.background = "#B6E2DA"
  }

}
