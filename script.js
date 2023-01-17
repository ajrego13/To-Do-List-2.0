let list = document.getElementById('list');
const HTMLEL = document.documentElement;
const toggle = document.getElementById('light');
let submit = document.getElementById('submit'); 
let checked = document.getElementById('checked'); 

document.addEventListener('DOMContentLoaded', loadGet); 

// event listener for dynamic objects
list.addEventListener('click', (e) => {
console.log(e.target)
if (e.target && e.target.matches('#trash')) {
  deleate(e); 
}

if (e.target && e.target.matches("#checked")) {
  check(e); 
}
  
  
}); // use event delegation to assign event listener to checked button as well

//event listener for submit btn
submit.addEventListener('click', (e) => {
  e.preventDefault();
  addItem(); 
})

//event listener for theme switch
toggle.addEventListener('click', themeSwitch)

function themeSwitch () {
    if (HTMLEL.dataset.theme === "light") {
      return HTMLEL.dataset.theme = "dark";
    } else {
      return HTMLEL.dataset.theme = "light";
    }
      
  }

 

  
// popualtes the page with the local storag eitems once the page loads;
function loadGet () {
    let current = JSON.parse(localStorage.getItem('todo')); 

    current.map(item => {
        let div = document.createElement('div'); 
        div.innerHTML = `<article> <h2 id="data" >${item}</h2> <button class='trash' id='trash'> <i class="fa-solid fa-trash fa-xl"></i> </button> <button id="checked"><i class="fa-solid fa-check"></i></button> </article> `; 
        list.append(div); 
    });
}

// addes html elements && sends them to local storage
function addItem () {

    let item = document.getElementById('item').value; 
   
    
    if (item === '') {
        return alert('you must fill out form')
    }
   
    let div = document.createElement('div'); 
        div.innerHTML = `<article> <h2 id="data" >${item}</h2> <button class='trash' id='trash'> <i class="fa-solid fa-trash fa-xl"></i>
        </button> <button id="checked" ><i class="fa-solid fa-check"></i></button></article>`; 
        list.append(div); 

    document.getElementById('item').value = '';

    addtoLocalstorage(item); 

   
}

// addes text to loccalstorage
function addtoLocalstorage (item) {
    localStorage.getItem('todo') === null ? todo = [] : todo = JSON.parse(localStorage.getItem('todo')); 
    localStorage.setItem('todo', JSON.stringify(item)); 
    todo.push(item); 
    localStorage.setItem('todo', JSON.stringify(todo)); 
}; 

// deletes the html element && deletes it from local storage
function deleate(e) {
  console.log('you clicked the delete btn!')
    let item = e.target
    console.log(item.parentElement)
    let selectedText = item.parentElement.children[0].innerText; 

    if (item.classList == 'trash') {
      item.parentElement.remove();
    }

   let array = JSON.parse(localStorage.getItem('todo')) 

   //array.splice(array.indexOf(selectedText), 1); 
  
    let newarray = array.filter((value) => {
      value !== selectedText
   })
   localStorage.setItem('todo', JSON.stringify(newarray));
}


function check (e) {
console.log('you clicked the checkbox!')
let textBox = e.target.parentElement.children.data;

 if (textBox.style.textDecoration = 'none') {
  return textBox.style.textDecoration = 'line-through'
 }
}

