console.log("this is es6");

class Book {
    constructor(name, auther, type) {
        this.name = name;
        this.auther = auther;
        this.type = type;
    }
}

class Display{
    addContent (book){
    // tableContent.innerHTML +=
    // adding to ui
    console.log("adding to ui");
    
    
     `
    <tr>
    <th scope="row">${book.id}</th>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    <td><button onClick="handleReturn(${book.id})">return</button></td>

    </tr>
    `
    }
}

