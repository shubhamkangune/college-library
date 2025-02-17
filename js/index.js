console.log("this is index.js");

// Constructors

// function Book(name,author,type){
//     this.name = name;
//     this.author = author;
//     this.type = type;

// }

// display constructors

// function Display(){

// }

class Book{
    constructor(name,auther,type){

        this.name = name
        this.auther = auther
        this.type = type

    }

    // add(){
    //     document.body.innerHTML += `
    //     <li>${this.name}</li>
    //     ` 
    // }
}

// Add methods to display prototypes




// add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

const tableContent = document.getElementById("tableContent")

function libraryFormSubmit(e){
    e.preventDefault();
    console.log("you have submited the library form",e.target.name.value);


    // if(fiction.checked){
    //     type = fiction.value;
    // }
    // else if(programming.checked){
    //     type = programming.value;
    // }
    // else if(cooking.checked){
    //     type = cooking.value;
    // }

    const newBook  = new Book(e.target.name.value,e.target.auther.value,e.target.type.value)

    console.log(newBook);

    // tableContent.innerHTML += `
    // <tr>
    //         <th scope="row">1</th>
    //         <td>${newBook.name}</td>
    //         <td>${newBook.auther}</td>
    //         <td>${newBook.type}</td>
    //       </tr>
    //       `
    
    
    // let book = new Book(name, author,type);
    // console.log(book);

    // let display = new Display(name, author,type);
    // display.add();
    // display.clear()
    
    
}