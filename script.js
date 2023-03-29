let myLibrary = [];

function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
};

function addBookToLibrary(title, author, read) {
    //azione da collegare al submit del form e.click
    //contestualmente al submit del form viene creato un nuovo oggetto libro
    let newBook = new Book(title, author, read);
    //oggetto viene pushato nell'array
    myLibrary.push(newBook)
    //funzione per creare le card in pagina manipolando il dom
  }

  const Hobbit = new Book('The Hobbit', 'Tolkien', 'Read')