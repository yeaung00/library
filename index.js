const bookTitle = document.getElementById('title');
const modal = document.querySelector('.modal');
const modalEdit = document.querySelector('.modal-edit');
const btn = document.getElementById('add');
const cancel = document.getElementById('cancel');
const submit = document.getElementById('submit');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
let createDiv;
let editDivBtn;
let divBtn;
let deleteDivBtn;
let title = "";
let author = "";
let pages = 0;
let myLibrary = [];
let id = 1;
let idToRemove;
let idToEdit;

btn.addEventListener('click', (e) => {
    modal.style.display = 'block';
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
    id++;
})

function Book(title, author, pages) {
    this.id = id;
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
    createParagraph.textContent = "Pages: " + myLibrary.pages;
    createDiv.appendChild(createParagraph);
}
function addBookToLibrary() {
    myLibrary = new Book(title, author, pages);
    createDiv = document.createElement("div");
    createDiv.setAttribute('id', 'book' + id);
    createDiv.setAttribute('class', 'book');
    deleteBtn();
    createLibraryContent();
    grid.appendChild(createDiv);
}

function deleteBtn() {
    divBtn = document.createElement("div");
    divBtn.setAttribute('class', 'divBtn');
    
    deleteDivBtn = document.createElement("button");
    editDivBtn = document.createElement("button");
    editDivBtn.setAttribute('class', 'btn');
    editDivBtn.textContent = "Edit";
    deleteDivBtn.setAttribute('class', 'btn red');
    deleteDivBtn.setAttribute('id', id);
    deleteDivBtn.textContent = "Delete";
    divBtn.appendChild(deleteDivBtn);
    divBtn.appendChild(editDivBtn);
    createDiv.appendChild(divBtn);
    deleteDivBtn.addEventListener('click', (e) => {
        idToRemove = e.target.id;
        myLibrary = Object.values(myLibrary).filter((item) => item.id !== idToRemove);
        let removeDiv = document.getElementById('book' + idToRemove);
        console.log(removeDiv);
        grid.removeChild(removeDiv);
    });


}
