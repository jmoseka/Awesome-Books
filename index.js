const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const addBtn = document.querySelector("#addBtn");
const form = document.querySelector("#form");
const bookContainer = document.querySelector(".book-container")


function displayBooks(){
    var books = JSON.parse(window.localStorage.getItem("bookData") || "[]" );
    for (const book of [...Object.keys(books)]) {
        const element = document.createElement('div');
        const button = document.createElement('button')
        const horizontalLine = document.createElement('hr');
        button.innerHTML = `Remove`

        element.classList.add('book-list');
        element.innerHTML = `
            <p class="titleBook">${books[book].title}</p>
            <p>${books[book].author}</p>
            `;

        element.appendChild(button)
        element.append(horizontalLine)
        bookContainer.appendChild(element);

        button.addEventListener('click', (e) => {
            const targetClass = e.target.parentElement;
            const stringTitle = targetClass.childNodes[1].textContent;
            removeBook(stringTitle)
            e.target.parentElement.remove();
        })
      }
}
displayBooks();

function addBooks(title, author){
    var books = JSON.parse(window.localStorage.getItem("bookData") || "[]");
    const newBook = {
        title: title,
        author: author,
      };
      books.push(newBook);
      window.localStorage.setItem('bookData', JSON.stringify(books));
}

addBtn.addEventListener('click', (e) => {
    addBooks(titleInput.value, authorInput.value);
    bookContainer.innerHTML = "";
    displayBooks();
    titleInput.value = "";
    authorInput.value = "";
    
  });

 function removeBook (title) {
    var books = JSON.parse(window.localStorage.getItem("bookData"));
    const removebk = books.filter((book) => book.title !== title);
    window.localStorage.setItem('bookData', JSON.stringify(removebk));
  }
