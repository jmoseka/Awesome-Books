const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const addBtn = document.querySelector('#addBtn');
const bookContainer = document.querySelector('.book-container');

function removeBook(title) {
  const books = JSON.parse(window.localStorage.getItem('bookData'));
  const removebk = books.filter((book) => book.title !== title);
  window.localStorage.setItem('bookData', JSON.stringify(removebk));
}

function displayBooks() {
  const books = JSON.parse(window.localStorage.getItem('bookData') || '[]');
  // eslint-disable-next-line no-restricted-syntax
  for (const book of [...Object.keys(books)]) {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const horizontalLine = document.createElement('hr');
    button.innerHTML = 'Remove';

    element.classList.add('book-list');
    element.innerHTML = `
            <p class="titleBook">${books[book].title}</p>
            <p>${books[book].author}</p>
            `;

    element.appendChild(button);
    element.append(horizontalLine);
    bookContainer.appendChild(element);

    button.addEventListener('click', (e) => {
      const targetClass = e.target.parentElement;
      const stringTitle = targetClass.childNodes[1].textContent;
      removeBook(stringTitle);
      e.target.parentElement.remove();
    });
  }
}

displayBooks();

function addBooks(title, author) {
  const books = JSON.parse(window.localStorage.getItem('bookData') || '[]');
  const newBook = {
    title,
    author,
  };
  books.push(newBook);
  window.localStorage.setItem('bookData', JSON.stringify(books));
}

addBtn.addEventListener('click', () => {
  addBooks(titleInput.value, authorInput.value);
  bookContainer.innerHTML = '';
  displayBooks();
  titleInput.value = '';
  authorInput.value = '';
});
