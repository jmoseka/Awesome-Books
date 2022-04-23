const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const addBtn = document.querySelector('#addBtn');
const bookContainer = document.querySelector('.book-container');
const notice = document.querySelector('.notice');
class BookCL {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  /** Function to remove book when remove button is clicked */
  // eslint-disable-next-line class-methods-use-this
  removeBook(title) {
    const books = JSON.parse(window.localStorage.getItem('bookData'));
    const removebk = books.filter((book) => book.title !== title);
    window.localStorage.setItem('bookData', JSON.stringify(removebk));
  }

  // eslint-disable-next-line class-methods-use-this
  displayBooks() {
    const books = JSON.parse(window.localStorage.getItem('bookData') || '[]');

    /** Loop thgrough book object and create inner html based on the data inside the
   * book object
   */
    // eslint-disable-next-line no-restricted-syntax
    for (const book of [...Object.keys(books)]) {
      const element = document.createElement('div');
      const button = document.createElement('button');
      button.innerHTML = 'Remove';
      button.classList.add('remove');

      element.classList.add('book-list');
      element.innerHTML = `
      <div class='p-list'>
            <p class="titleBook">${books[book].title}</p>
            <p>by ${books[book].author}</p>
      </div>
            `;

      element.appendChild(button);
      bookContainer.appendChild(element);

      /** Add function click event to the explicitly declared button */
      // eslint-disable-next-line no-loop-func
      button.addEventListener('click', (e) => {
        const targetClass = e.target.parentElement;
        const stringTitle = targetClass.childNodes[1].childNodes[1].textContent;
        this.removeBook(stringTitle);
        e.target.parentElement.remove();
      });
    }
  }

  /** Function to add book when add button is clicked */
  // eslint-disable-next-line class-methods-use-this
  addBooks(title, author) {
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
}

/** Function to display button each time page loads or the data objects is updated
 * by remove or add button
 */

// populate window with data
const bookCl = new BookCL();
bookCl.displayBooks();

// click event for the add button
addBtn.addEventListener('click', () => {
  if (titleInput === '' || authorInput.value === '') {
    notice.classList.remove('hidden');
  } else {
    const addBookCl = new BookCL(titleInput.value, authorInput.value);
    bookCl.addBooks(titleInput.value, authorInput.value);
    bookContainer.innerHTML = '';
    addBookCl.displayBooks();
    titleInput.value = '';
    authorInput.value = '';
  }
});

// remove error message upon clicking anywhere
document.onclick = (e) => {
  /** Close modal window if pressed anywhere */
  if (
    e.target.id === 'titleInput'
    || e.target.id === 'authorInput'
  ) {
    notice.classList.add('hidden');
  }
};