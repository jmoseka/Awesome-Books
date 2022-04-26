/* eslint-disable no-unused-expressions */
import BookClass, { displayBook } from './modules/bookClass.js';
import addBooks from './modules/addBook.js';
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

// populate data on the screen
const bookClass = new BookClass('', '');
displayBook(bookClass);

// functions for nav links when clicked
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
    addBooks(bookClass, bookClass);
    bookContainer.innerHTML = '';
    displayBook(bookClass);
    titleInput.value = '';
    authorInput.value = '';
  }
});

// remove error message upon clicking on the form text field
document.onclick = (e) => {
  if (
    e.target.id === 'titleInput'
    || e.target.id === 'authorInput'
  ) {
    notice.classList.add('hidden');
  }
};