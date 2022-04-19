const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const addBtn = document.querySelector('#addBtn');
const bookContainer = document.querySelector('.book-container');

/** Function to remove book when remove button is clicked */
function removeBook(title) {
  const books = JSON.parse(window.localStorage.getItem('bookData'));
  const removebk = books.filter((book) => book.title !== title);
  window.localStorage.setItem('bookData', JSON.stringify(removebk));
}

/** Function to display button each time page loads or the data objects is updated
 * by remove or add button
 */
function displayBooks() {
  const books = JSON.parse(window.localStorage.getItem('bookData') || '[]');

  /** Loop thgrough book object and create inner html based on the data inside the 
   * book object
   */
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

    /** Add function click event to the explicitly declared button */
    button.addEventListener('click', (e) => {
      const targetClass = e.target.parentElement;
      const stringTitle = targetClass.childNodes[1].textContent;
      removeBook(stringTitle);
      e.target.parentElement.remove();
    });
  }
}

// populate window with data
displayBooks();

/** Function to add book when add button is clicked */
function addBooks(title, author) {
  const books = JSON.parse(window.localStorage.getItem('bookData') || '[]');
  /** create a new book and push it to the book object */
  const newBook = {
    title,
    author,
  };
  books.push(newBook);

  /** Store the updated object data in local storage */
  window.localStorage.setItem('bookData', JSON.stringify(books));
}

// click event for the add button
addBtn.addEventListener('click', () => {
  addBooks(titleInput.value, authorInput.value);
  bookContainer.innerHTML = '';
  displayBooks();
  titleInput.value = '';
  authorInput.value = '';
});
