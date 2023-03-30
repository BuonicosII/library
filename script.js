let myLibrary = [];

function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
};

function addBookToLibrary(event) {
    //azione da collegare al submit del form e.click
    event.preventDefault();
    //contestualmente al submit del form viene creato un nuovo oggetto libro
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let read = document.querySelector('#readstatus').value;
    let newBook = new Book(title, author, read);
    //oggetto viene pushato nell'array
    myLibrary.push(newBook);
    //funzione per creare le card in pagina manipolando il dom
    
  }

const submitButton = document.querySelector('#submitbutton');
submitButton.addEventListener("click", addBookToLibrary);
  //const Hobbit = new Book('The Hobbit', 'Tolkien', 'Read')