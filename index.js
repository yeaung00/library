const bookTitle = document.getElementById('title');
const modal = document.querySelector('.modal');
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
let id = 0;
let bookID;
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
    id++;
});

function Book(title, author, pages, read) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function createLibraryContent() {
    createParagraph = document.createElement("p");
    createParagraph.textContent = "Title: " + myLibrary[bookID].title;
    selectedDiv.appendChild(createParagraph);

    createParagraph = document.createElement("p");
    createParagraph.textContent = "Author: " + myLibrary[bookID].author;
    selectedDiv.appendChild(createParagraph);

    createParagraph = document.createElement("p");
    createParagraph.textContent = "Pages: " + myLibrary[bookID].pages;
    selectedDiv.appendChild(createParagraph);

    createParagraph = document.createElement("p");
    createParagraph.textContent = "Status: " + myLibrary[bookID].read;
    selectedDiv.appendChild(createParagraph);
}

function addBookToLibrary() {
    myLibrary[id] = new Book(title, author, pages, read);
    selectedDiv = document.createElement("div");
    selectedDiv.setAttribute('id', 'book' + id);
    selectedDiv.setAttribute('class', 'book');
    addButtons();
    createLibraryContent();
    grid.appendChild(selectedDiv);
    console.log(myLibrary);
}

function editBookToLibrary() {
    myLibrary[bookID] = new Book(title, author, pages, read);
    editText = selectedDiv.querySelectorAll("p");
    for (let i = 0; i < editText.length; i++) {
        selectedDiv.removeChild(editText[i]);
    }
    console.log(myLibrary);
    createLibraryContent();
}

function addButtons() {
    bookID = id;
    divBtn = document.createElement("div");
    divBtn.setAttribute('class', 'divBtn');
    
    deleteDivBtn = document.createElement("button");
    editDivBtn = document.createElement("button");
    editDivBtn.setAttribute('class', 'btn');
    editDivBtn.setAttribute('id', id);
    editDivBtn.textContent = "Edit";
    deleteDivBtn.setAttribute('class', 'btn red');
    deleteDivBtn.setAttribute('id', id);
    deleteDivBtn.textContent = "Delete";
    divBtn.appendChild(deleteDivBtn);
    divBtn.appendChild(editDivBtn);
    selectedDiv.appendChild(divBtn);

    deleteDivBtn.addEventListener('click', (e) => {
        id--;
        bookID = e.target.id;
        myLibrary.splice(bookID, 1);
        selectedDiv = document.getElementById('book' + bookID);
        grid.removeChild(selectedDiv);
        console.log(myLibrary);
    });

    editDivBtn.addEventListener('click', (e) => {
        isEditing = true;
        console.log(selectedDiv+ 'before');
        modal.style.display = 'block';
        bookID = e.target.id;
        selectedDiv = document.getElementById('book' + bookID);
    });
}
