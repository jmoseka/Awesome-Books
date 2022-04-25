/* eslint-disable no-unused-expressions */
import BookClass, { displayBook, addBooks } from './modules/bookClass.js';
import * as Menu from './modules/menu.js';
import { DateTime } from './modules/luxon.js';

const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const addBtn = document.querySelector('#addBtn');
const bookContainer = document.querySelector('.book-container');
const notice = document.querySelector('.notice');
const time = document.querySelector('.time');

// display time
const today = DateTime.local();
const now = today.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
time.textContent = now;

const bookClass = new BookClass('', '');
displayBook(bookClass);
Menu.displayAdd;
Menu.displayContact;
Menu.displayList;
// click event for the add button
addBtn.addEventListener('click', () => {
  if (titleInput === '' || authorInput.value === '') {
    notice.classList.remove('hidden');
  } else {
    bookClass.title = titleInput.value;
    bookClass.author = authorInput.value;
    // const addBookCl = new BookCL(titleInput.value, authorInput.value);
    addBooks(bookClass);
    bookContainer.innerHTML = '';
    displayBook(bookClass);
    // bookCl.displayBooks();
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