
document.addEventListener("DOMContentLoaded", function(event) {
    const libraryContainer = document.getElementById('library-container')
    const newBookForm = document.getElementById('new-book-form')
    let bookID = 0;
    const myLibrary = [
    ];

    newBookButton(newBookForm)
    Book()
    addBookToLibrary(myLibrary, newBookForm, libraryContainer, bookID)

})

function newBookButton (newBookForm) {
    const newBookButtonForm = document.getElementById('new-book-button');
    newBookButtonForm.addEventListener('click', function(event) {
    newBookForm.reset();
    newBookForm.style.display = "block"

    })
}

function Book(id, author, title, pagesNumber, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.read = read;
}
let isRead = true;

function addBookToLibrary(myLibrary, newBookForm, libraryContainer, bookID, isRead) {
    newBookForm.addEventListener('submit', function(event) {
        event.preventDefault()
        libraryContainer.innerHTML = '';
        bookID += 1;
        let id = bookID;
        let author = document.querySelector('#author').value;
        let title = document.querySelector('#title').value;
        let pagesNumber = document.querySelector('#pageNumbers').value;
        let read = document.getElementById('read-question').checked;
        let newBook = new Book(id, author, title, pagesNumber, read)

        myLibrary.push(newBook)

        libraryContainer.innerHTML = '';
        myLibrary.forEach((book) => {
            const bookToDisplay = document.createElement('div')
            bookToDisplay.className = "book-card";
            bookToDisplay.id = `book-id-${book.id}`
            bookToDisplay.innerHTML = `
                <ul>
                    <li><strong>Author: </strong>${book.author}</li>
                    <li><strong>Title: </strong>${book.title}</li>
                    <li><strong>Page Numbers: </strong>${book.pagesNumber}</li>
                    <li id="read-change-${book.id}" name="read-change-${book.id}"><strong>Read: </strong>${book.read}</li>
                    <button id="delete-book-${book.id}" name="delete-book-${book.id}" type="button" class="btn btn-danger">Delete</button>
                    <button id="read-question-change-${book.id}" name="read-question-change-${book.id}" class="btn btn-warning">Change Read Status</button>
                </ul>
            `;
            libraryContainer.append(bookToDisplay);
            const bookToDelete = document.querySelector(`#delete-book-${book.id}`)
            bookToDelete.addEventListener('click', function() {
                let bookToDeleteNum = book.id;
                let bookIDToDelete = document.querySelector(`#book-id-${book.id}`)
                deleteBook(myLibrary, bookToDeleteNum, bookIDToDelete)
            })
            const bookReadQuestionChange = document.querySelector(`#read-question-change-${book.id}`)
            bookReadQuestionChange.addEventListener('click', function() {
                console.log("read status before", book.read)
                if (book.read) {
                    book.read = false
                    console.log("true to false", book.read)
                    const changeReadStatus = document.querySelector(`#read-change-${book.id}`)
                    changeReadStatus.innerHTML = ''
                    changeReadStatus.innerHTML = `<strong>Read: </strong>${book.read}`

                } else if (!book.read) {
                    book.read = true
                    console.log("false to true", book.read)
                    const changeReadStatus = document.querySelector(`#read-change-${book.id}`)
                    changeReadStatus.innerHTML = ''
                    changeReadStatus.innerHTML = `<strong>Read: </strong>${book.read}`
                }
            })
        })
        newBookForm.style.display = "none"
    })
}

function deleteBook(myLibrary, bookToDeleteNum, bookIDToDelete) {
    bookIDToDelete.style.display = "none";
    const index = myLibrary.findIndex(book => book.id === bookToDeleteNum);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
}







