const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("Harry Potter", "Rowling", 234, "true");

const btnBook = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".cancel");
const submitButton = document.querySelector(".add");

btnBook.addEventListener("click", () => {
    document.querySelector(".form").reset();
    dialog.showModal()
    console.log("Click");
})

closeButton.addEventListener("click", () => {
    dialog.close();
});

submitButton.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pages, read);
    addElement(title, author, pages, read);
    console.log(myLibrary);
})

function addElement(title, author, pages, read) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('book');

    const newTitle = document.createElement("div");
    newTitle.classList.add('book-title');
    newTitle.appendChild(document.createTextNode(title));
    
    const newAuthor = document.createElement("div");
    newAuthor.classList.add('book-stats');
    newAuthor.appendChild(document.createTextNode("Author: " + author));

    const newPages = document.createElement("div");
    newPages.classList.add('book-stats');
    newPages.appendChild(document.createTextNode("Pages: " + pages));

    const newRead = document.createElement("div");
    newRead.classList.add('book-stats');
    newRead.appendChild(document.createTextNode(`Read: ${read ? "Yes" : "No"}`));

    const currentDiv = document.querySelector(".books");
    currentDiv.insertAdjacentElement('beforeend', newDiv);
    newDiv.insertAdjacentElement('beforeend', newTitle);
    newDiv.insertAdjacentElement('beforeend', newAuthor);
    newDiv.insertAdjacentElement('beforeend', newPages);
    newDiv.insertAdjacentElement('beforeend', newRead);
}

document.addEventListener("DOMContentLoaded", () => {
    for (const element of myLibrary) {
        let title = element.title;
        let author = element.author;
        let pages = element.pages;
        let read = element.read;
        addElement(title, author, pages, read);
    }
});

// Add Function to Delete Book
// Add Function to Change Read Status
