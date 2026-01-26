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

const btnBook = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".cancel");
const submitButton = document.querySelector(".add");

btnBook.addEventListener("click", () => {
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
    console.log(myLibrary);
    //add deletion of form input, so when you click "add new book" the form is not prefilled with old input
})
