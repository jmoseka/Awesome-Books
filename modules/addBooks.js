export default (booksCl) => {
  const books = JSON.parse(window.localStorage.getItem('bookData') || '[]');
  books.push(booksCl);
  /** Store the updated object data in local storage */
  window.localStorage.setItem('bookData', JSON.stringify(books));
};