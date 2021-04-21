class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }
  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
}

function loadBooks(bookshelf) {
  fakeAjax(BOOK_API, function onBooksLoad(bookArray) {
    for (let bookName of bookArray) {
      bookshelf.addFavoriteBook(bookName);
    }
    bookshelf.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

let someBookShelf = new Bookshelf();

loadBooks(someBookShelf);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
