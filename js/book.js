let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

const books = [
    {
        id:1,
        name:"ram",
        author:"sham",
        type:"commics"
    }
]

function libraryFormSubmit(e){
    e.preventDefault();
    
    let newBook ={
        id:books.length+1,
        name:e.target.name.value,
        author:e.target.auther.value,
        type:e.target.type.value
    }
    
    books.push(newBook)

    // addContent(newBook)
    reMapBooks()
}

function reMapBooks(){
    tableContent.innerHTML = ''
books.map(addContent)

}


const tableContent = document.getElementById("tableContent")

function addContent (book){
    tableContent.innerHTML += `
    <tr>
    <th scope="row">${book.id}</th>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    <td><button onClick="handleReturn(${book.id})">return</button></td>

    </tr>
    `
}

books.map(addContent)

function handleReturn(id){
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
    }
    reMapBooks();
}