const bookTitle = document.getElementById('title');
const modal = document.querySelector('.modal')
const modalEdit = document.querySelector('.modal-edit');
const addBookBtn = document.getElementById('add');
const cancel = document.getElementById('cancel');
const submit = document.getElementById('submit');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookStatus = document.querySelectorAll('.status');
const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
let selectedDiv;
let createParagraph;
let editDivBtn;
let divBtn;
let deleteDivBtn;
let title = "";
let author = "";
let pages = 0;
let read = "";
let myLibrary = [];
let bookID = 0;
let selectedBookID;
let editText;
let isEditing = false;

addBookBtn.addEventListener('click', (e) => {
    isEditing = false;
    modal.style.display = 'block';
});

cancel.addEventListener('click', (e) => {
    modal.style.display = "none";
});

[].forEach.call(bookStatus, function(item, i) {
    item.addEventListener('change', () => {
        read = item.value;
    });
});

submit.addEventListener('click', (e) => {
    title = bookTitle.value;
    author = bookAuthor.value;
    pages = bookPages.value;
    modal.style.display = "none";
    if (isEditing === true) {
        editBookToLibrary();
        return;
    }
    
    addBookToLibrary();
    bookID++;
});

function Book(title, author, pages, read) {
    this.bookID = bookID;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function createLibraryContent() {
    createParagraph = document.createElement("p");
    createParagraph.textContent = "Title: " + myLibrary[selectedBookID].title;
    selectedDiv.appendChild(createParagraph);

    createParagraph = document.createElement("p");
    createParagraph.textContent = "Author: " + myLibrary[selectedBookID].author;
    selectedDiv.appendChild(createParagraph);

    createParagraph = document.createElement("p");
    createParagraph.textContent = "Pages: " + myLibrary[selectedBookID].pages;
    selectedDiv.appendChild(createParagraph);

    createParagraph = document.createElement("p");
    createParagraph.textContent = "Status: " + myLibrary[selectedBookID].read;
    selectedDiv.appendChild(createParagraph);
}

function addBookToLibrary() {
    myLibrary[bookID] = new Book(title, author, pages, read);
    selectedDiv = document.createElement("div");
    selectedDiv.setAttribute('id', 'book' + bookID);
    selectedDiv.setAttribute('class', 'book');
    addButtons();
    createLibraryContent();
    grid.appendChild(selectedDiv);
    console.log(myLibrary);
}

function editBookToLibrary() {
    myLibrary[selectedBookID] = new Book(title, author, pages, read);
    editText = selectedDiv.querySelectorAll("p");
    for (let i = 0; i < editText.length; i++) {
        selectedDiv.removeChild(editText[i]);
    }
    console.log(myLibrary);
    createLibraryContent();
}

function addButtons() {
    selectedBookID = bookID;
    
    
    deleteDivBtn = document.createElement("button");
    deleteDivBtn.setAttribute('class', 'btn red');
    deleteDivBtn.setAttribute('id', bookID);
    deleteDivBtn.textContent = "Delete";

    editDivBtn = document.createElement("button");
    editDivBtn.setAttribute('class', 'btn');
    editDivBtn.setAttribute('id', bookID);
    editDivBtn.textContent = "Edit";

    divBtn = document.createElement("div");
    divBtn.setAttribute('class', 'divBtn');
    divBtn.appendChild(deleteDivBtn);
    divBtn.appendChild(editDivBtn);

    selectedDiv.appendChild(divBtn);

    deleteDivBtn.addEventListener('click', (e) => {
        bookID--;
        selectedBookID = e.target.id;
        myLibrary.splice(selectedBookID, 1);
        selectedDiv = document.getElementById('book' + selectedBookID);
        grid.removeChild(selectedDiv);
        console.log(myLibrary);
    });

    editDivBtn.addEventListener('click', (e) => {
        isEditing = true;
        console.log(selectedDiv+ 'before');
        modal.style.display = 'block';
        selectedBookID = e.target.id;
        selectedDiv = document.getElementById('book' + selectedBookID);
    });
}
