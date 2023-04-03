let myLibrary = [];
let shelf = document.querySelector('#shelf');

//object constructor libro

function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
};

Book.prototype.toggleRead = function() {
  if (this.read === 'Read') {
    this.read = 'Not Read'
  } else {
    this.read = 'Read'
  }
}

//funzione per rimuovere tutti gli elementi dom e crearne nuovi in base agli oggetti
//presenti nell'array myLibrary

function orderShelf() {

//rimuove tutte le card attualmente presenti sullo shelf evitando doppioni

  while (shelf.hasChildNodes()) {
    shelf.removeChild(shelf.firstChild);
  };

//loop che crea per ogni item dell'array una card con le informazioni estratte
//dall'oggetto

  for (const book of myLibrary) {
    let indexNum = `${myLibrary.findIndex(function (item) {return item.title === book.title})}`
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let author = document.createElement('h3');
    let read = document.createElement('p');
    let removeButton = document.createElement('button');
    let toggleStatus = document.createElement('button');
    title.textContent = book.title; 
    author.textContent = book.author;
    read.textContent = book.read;
    removeButton.textContent = 'Remove';
    toggleStatus.textContent = 'Toggle';
    shelf.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(read);
    card.appendChild(removeButton);
    card.appendChild(toggleStatus);
    removeButton.setAttribute('data-index', `${indexNum}`);
    removeButton.addEventListener('click', removeFromLibrary);
    toggleStatus.setAttribute('data-index', `${indexNum}`);
    toggleStatus.addEventListener('click', function() {myLibrary[0].toggleRead()});
  }

}

//funzione per rimuovere libro dall'array myLibrary e dallo shelf

function removeFromLibrary(event) {
  myLibrary.splice(event.target.getAttribute("data-index"), 1);

  orderShelf();
};

//funzione per aggiungere un libro alla libreria

function addBookToLibrary(event) {

    //previene l'azione default di un submit button

    event.preventDefault();

    //contestualmente al submit del form viene creato un nuovo oggetto libro

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let read = document.querySelector('#readstatus').value;
    let newBook = new Book(title, author, read);

    //oggetto viene pushato nell'array myLibrary

    myLibrary.push(newBook);

    orderShelf();
  }

const submitButton = document.querySelector('#submitbutton');
submitButton.addEventListener("click", addBookToLibrary);

//funzione per cambiare stato di lettura del libro

//due radio button 