class Library { 
  constructor() {
    this.books = [];
  }

  addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    this.books.push(book);
  }

  addElement(book) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('book');

    const newTitle = document.createElement("div");
    newTitle.classList.add('book-title');
    newTitle.appendChild(document.createTextNode(book.title));

    const newAuthor = document.createElement("div");
    newAuthor.classList.add('book-stats');
    newAuthor.appendChild(document.createTextNode("Author: " + book.author));

    const newPages = document.createElement("div");
    newPages.classList.add('book-stats');
    newPages.appendChild(document.createTextNode("Pages: " + book.pages));

    const newRead = document.createElement("div");
    newRead.classList.add('book-stats');
    newRead.appendChild(document.createTextNode(`Read: ${book.read ? "Yes" : "No"}`));

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

    newButton1.addEventListener("click", () => {
      book.toggleReadStatus();
      displayBooks();
    })

    const newButton2 = document.createElement("button");
    newButton2.classList.add('delete');
    newButton2.appendChild(document.createTextNode("Delete"));
    buttonDiv.insertAdjacentElement('beforeend', newButton2);

    newButton2.addEventListener("click", () => {
      this.deleteBook(book.id);
      displayBooks();
    });
  }

  deleteBook(id) {
    this.books = this.books.filter(book => book.id !== id);
  }

}

class Book {
  constructor (title, author, pages, read) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }

  toggleReadStatus() {
    this.read = !this.read; 
  }
}

const myLibrary = new Library();

myLibrary.addBookToLibrary("Harry Potter", "Rowling", 234, true);

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

// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   const titleInput = document.getElementById("title");
//   const authorInput = document.getElementById("author");
//   const pagesInput = document.getElementById("pages");
//
//   titleInput.setCustomValidity('');
//   authorInput.setCustomValidity('');
//   pagesInput.setCustomValidity('');
//
//   if (!titleInput.validity.valid) {
//     titleInput.setCustomValidity('I need a value!');
//     titleInput.reportValidity();
//     return;
//   }
//
//   if (!authorInput.validity.valid) {
//     authorInput.setCustomValidity('I need a value!');
//     authorInput.reportValidity();
//     return;
//   }
//
//   if (!pagesInput.validity.valid) {
//     pagesInput.setCustomValidity('I need a value!');
//     pagesInput.reportValidity();
//     return;
//   }
//
//   const titleValue = document.getElementById("title").value;
//   const authorValue = document.getElementById("author").value;
//   const pagesValue = document.getElementById("pages").value;
//   const read = document.getElementById("read").checked;
//   myLibrary.addBookToLibrary(titleValue, authorValue, pagesValue, read);
//   displayBooks();
//   dialog.close();
// })

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");

  titleInput.setCustomValidity('');
  authorInput.setCustomValidity('');
  pagesInput.setCustomValidity('');

  if (!titleInput.validity.valid) {
    titleInput.setCustomValidity('I need a value!');
    titleInput.reportValidity();
    return;
  }

  if (!authorInput.validity.valid) {
    authorInput.setCustomValidity('I need a value!');
    authorInput.reportValidity();
    return;
  }

  if (!pagesInput.validity.valid) {
    pagesInput.setCustomValidity('I need a value!');
    pagesInput.reportValidity(); 
    return;
  }

  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const pagesValue = pagesInput.value;
  const read = document.getElementById("read").checked;
  
  myLibrary.addBookToLibrary(titleValue, authorValue, pagesValue, read);
  displayBooks();
  dialog.close();
});

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
});

function displayBooks() {
  const bookDiv = document.querySelector(".books");
  bookDiv.innerHTML = "";
  for (const element of myLibrary.books) {
    myLibrary.addElement(element);
  }
}
