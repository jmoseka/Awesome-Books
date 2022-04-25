/* eslint-disable no-console */
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  displayBooks() {
    console.log(this);
  }
}

const bk = new Books();
const see = new Books('Jo', 'FEEEE');
see.displayBooks();
bk.displayBooks();
