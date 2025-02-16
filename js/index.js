console.log("this is index.js");

// Constructors

function Book(name,author,type){

}

// display constructors

function Display(){

}

// Add methods to display prototypes




// add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    console.log("you have submited the library form");
}