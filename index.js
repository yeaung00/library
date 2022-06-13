const bookTitle = document.getElementById('title');
const modal = document.querySelector('.modal');
const btn = document.getElementById('add');
const cancel = document.getElementById('cancel');
const submit = document.getElementById('submit');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
let createDiv;

let deleteDivBtn;
let title = "";
let author = "";
let pages = 0;
let myLibrary = [];

btn.addEventListener('click', (e) => {
    modal.style.display = 'block';
    
    //
});

cancel.addEventListener('click', (e) => {
    modal.style.display = "none";
})

submit.addEventListener('click', (e) => {
    title = bookTitle.value;
    author = bookAuthor.value;
    pages = bookPages.value;
    addBookToLibrary();
    modal.style.display = "none";
})
function printBook() {
  console.log(form.value);
}

function Book(title, author, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function createLibraryContent() {
    createParagraph = document.createElement("p");
    createParagraph.textContent = "Title: " + myLibrary.title;
    createDiv.appendChild(createParagraph);

    createParagraph = document.createElement("p");
    createParagraph.textContent = "Author: " + myLibrary.author;
    createDiv.appendChild(createParagraph);

    createParagraph = document.createElement("p");
    createParagraph.textContent = "Number of pages: " + myLibrary.pages;
    createDiv.appendChild(createParagraph);
}
function addBookToLibrary() {
    myLibrary = new Book(title, author, pages);
    createDiv = document.createElement("div");
    deleteDivBtn = document.createElement("button");
    deleteDivBtn.setAttribute('class', 'btn red');
    deleteDivBtn.textContent = "Delete";
    deleteDivBtn.addEventListener('click', (e) => {
        grid.removeChild(createDiv);
    })
    createDiv.appendChild(deleteDivBtn);
    createLibraryContent();
    grid.appendChild(createDiv);
    displayBook();
}




function displayBook() {
    
    console.log(myLibrary.title);
    console.log(myLibrary.author);
    console.log(myLibrary.pages);
}