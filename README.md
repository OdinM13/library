# Library App

A personal book management application created as part of **The Odin Project's JavaScript curriculum**. This project focuses on **object-oriented programming (OOP)**, data structures, and dynamic DOM manipulation.

## Built With

* **HTML5** – Semantic structure and `<dialog>` element.
* **CSS3** – Custom properties, Grid, and Flexbox for the "Emerald Scholar" layout.
* **JavaScript (ES6 Classes)** – Refactored from object constructors to modern class-based architecture.
    * **Class Encapsulation**: Dedicated `Book` and `Library` classes to separate data logic from UI rendering.
    * **State Management**: Uses a centralized `Library` class as the "Source of Truth" for the book collection.
    * **Modern APIs**: Implementation of `crypto.randomUUID()` for robust unique identification.

## Features

* **OOP Architecture**: Modular code design using ES6 classes for better maintainability.
* **Dynamic Card Grid**: A responsive layout that automatically updates when books are added, removed, or modified.
* **Interactive Modal**: A clean entry form for new books using the native HTML `<dialog>` API.
* **Live Status Toggle**: Instantly switch a book's "Read" status between "Yes" and "No" via an internal method in the `Book` class.
* **Collection Management**: Complete CRUD-like functionality (Create, Read, Delete) with real-time UI synchronization.

## How to View

1. **Clone** this repository.
2. Open `index.html` in any modern web browser.
