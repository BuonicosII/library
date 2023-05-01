let myLibrary = [];
let shelf = document.querySelector('#shelf');

//object constructor libro

class Book {

  constructor (title, author, read) {
    this.title = title
    this.author = author
    this.read = read
  }

  toggleRead() {  if (this.read === 'Read') {
    this.read = 'Not Read'
  } else {
    this.read = 'Read'
  }}
};


const lotr = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 'Read');
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 'Read');
const armadillo = new Book('La profezia dell\'Armadillo', 'Zerocalcare', 'Not Read');

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
    let title = document.createElement('h4');
    let author = document.createElement('p');
    //let read = document.createElement('p');
    let buttonDiv = document.createElement('div');
    let removeButton = document.createElement('button');
    let toggleStatus = document.createElement('button');
    title.textContent = book.title; 
    author.textContent = book.author;
    //read.textContent = `Status: ${book.read}`;
    toggleStatus.textContent = `${book.read}`;
    removeButton.textContent = 'Remove';
    shelf.appendChild(card);
    card.setAttribute('class', 'card');
    card.appendChild(title);
    card.appendChild(author);
    //card.appendChild(read);
    card.appendChild(buttonDiv);
    buttonDiv.setAttribute('class', 'buttondiv');
    buttonDiv.appendChild(toggleStatus);
    buttonDiv.appendChild(removeButton);
    removeButton.setAttribute('data-index', `${indexNum}`);
    removeButton.setAttribute('id', 'removebutton');
    removeButton.addEventListener('click', removeFromLibrary);
    toggleStatus.setAttribute('data-index', `${indexNum}`);
    if (toggleStatus.textContent === 'Read') {
      toggleStatus.setAttribute('class', 'read');
      card.setAttribute('style', 'box-shadow: inset 3px 0 rgba(48, 138, 48, 0.863), 5px 5px 10px grey;');
    }
    toggleStatus.addEventListener('click', function() {myLibrary[`${indexNum}`].toggleRead(); orderShelf()});
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

    if (!document.getElementById('addtolibrary').checkValidity()) {
      document.getElementById('addtolibrary').reportValidity();
    } else {
    //contestualmente al submit del form viene creato un nuovo oggetto libro

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let read = document.querySelector('#readstatus').value;
    let newBook = new Book(title, author, read);



    //oggetto viene pushato nell'array myLibrary

    myLibrary.push(newBook);

    orderShelf();
    }
  }

const submitButton = document.querySelector('#submitbutton');
submitButton.addEventListener("click", addBookToLibrary);

myLibrary.push(lotr, hobbit, armadillo);
orderShelf();