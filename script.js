let list = document.getElementById('list');
list.addEventListener('click', deleate); 
document.addEventListener('DOMContentLoaded', loadGet); 
 
// popualtes the page with the local storag eitems once the page loads;
function loadGet () {
    let current = JSON.parse(localStorage.getItem('todo')); 

    current.map(item => {
        let div = document.createElement('div'); 
        div.innerHTML = `<article> <h2>${item}</h2> <button class='delt-btn' id='delt-btn'> <i class="fa-solid fa-trash fa-xl"></i>
        </button> </article> `; 
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
        div.innerHTML = `<article> <h2>${item}</h2> <button class='delt-btn' id='delt-btn'> <i class="fa-solid fa-trash fa-xl"></i>
        </button> </article>`; 
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
    let item = e.target
    let selectedText = item.parentElement.children[0].innerText; 

    if (item.classList == 'delt-btn') {
        item.parentElement.remove();
    }

   let array = JSON.parse(localStorage.getItem('todo')) 

   //array.splice(array.indexOf(selectedText), 1); 

  let newarray = array.filter((value) => {
    return value !== selectedText
  })
  
console.log(newarray)
   localStorage.setItem('todo', JSON.stringify(newarray));
}

