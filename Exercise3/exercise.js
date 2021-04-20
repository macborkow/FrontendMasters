// TODO: define addFavoriteBook(..) function

let addFavoriteBook = (bookTitle) => {
    if(!bookTitle.includes("Great")) {
        favoriteBooks.push(bookTitle);
    }
}

// TODO: define printFavoriteBooks() function

let printFavoriteBooks = () => {
    console.log(`
    Favorite books are ${favoriteBooks.join(", ")}.
    `);
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();