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

addBookToLibrary("Harry Potter", "Rowling", 234, true);

const btnBook = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".cancel");
const submitButton = document.querySelector(".add");

btnBook.addEventListener("click", () => {
    document.querySelector(".form").reset();
    dialog.showModal()
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
    displayBooks();
    dialog.close();
})

function addElement(title, author, pages, read, id) {
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
    
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add('buttons');
    newDiv.insertAdjacentElement('beforeend', buttonDiv);

    const newButton1 = document.createElement("button");
    newButton1.classList.add('status');
    newButton1.appendChild(document.createTextNode("Change Status"));
    buttonDiv.insertAdjacentElement('beforeend', newButton1);

    // Add Function to Change Read Status
    newButton1.addEventListener("click", () => {
        for (const element of myLibrary) {
            if (id === element.id) {
                if (element.read === true) {
                    element.read = false;
                } else {
                    element.read = true;
                }
            }
        }
        displayBooks();
    })

    const newButton2 = document.createElement("button");
    newButton2.classList.add('delete');
    newButton2.appendChild(document.createTextNode("Delete"));
    buttonDiv.insertAdjacentElement('beforeend', newButton2);

    // Add Function to Delete Book
    newButton2.addEventListener("click", () => {
        const index = myLibrary.findIndex(book => book.id === id);
        if (index !== -1) {
            myLibrary.splice(index, 1);
        }
        displayBooks();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayBooks();
});
    
function displayBooks() {
    const bookDiv = document.querySelector(".books");
    bookDiv.innerHTML = "";
    for (const element of myLibrary) {
        let title = element.title;
        let author = element.author;
        let pages = element.pages;
        let read = element.read;
        let id = element.id;
        addElement(title, author, pages, read, id);
    }
}

