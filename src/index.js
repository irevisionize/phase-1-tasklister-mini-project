// const { locationInfo } = require("jsdom/lib/jsdom/living/helpers/internal-constants")


let globalColor = 'red'
let highPriority = 'red'
let mediumPriority = "orange"
let lowPriority = "green"

// const clickAnswer = document.addEventListener("DOMContentLoaded", () => {
  let submitClick = document.querySelector('#create-task-form');
  const selectPriority = document.querySelector('#priority')
  selectPriority.addEventListener('change', (w) => {
  const myValue = w.target.value
  if (myValue === 'high'){
    globalColor = highPriority
  } else if (myValue === 'medium') {
      globalColor = mediumPriority
  } else { globalColor = lowPriority 
    

    } 
    
  })
  submitClick.addEventListener('submit', (e) => {
    e.preventDefault();
    addTasks();
  });
// });







function addTasks() {
  let addingList = document.getElementById('new-task-description');
  const newElement = document.createElement('div');
  newElement.style.color = globalColor
  const newBtn = document.createElement('button')
  newBtn.textContent = 'x'
  newBtn.addEventListener('click', () => {
    newElement.remove()
    newBtn.remove()
  })
  const inputValue = addingList.value;
  newElement.textContent = inputValue;
  const parentElement = document.querySelector('#tasks');
  parentElement.append(newElement, newBtn);
  
  
}






// const addTasks = document.addEventListener(  () => {
// const myTasks = document.querySelector('.tasks') 
// myTasks.textContent = 

// }); 





// const taskDescription = document.addEventListener( () => {
//   const newDescription = document.querySelector('#new-task-description')
// newDescription.addEventListener('reset', () => {


// })




// })


















// const need = document.querySelector('#submit')
// const newDescription = document.querySelector('#new-task-description')
// const submitClick = document.querySelector('#submit')
// const submitClick = document.querySelector('#submit')



// const clickAnswer = document.addEventListener("DOMContentLoaded", () => {
//   let submitClick = document.querySelector('#submit')
//   submitClick.addEventListener('click', (e) =>
//   e.preventDefault()
