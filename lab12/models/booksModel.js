let books = [];
let ID = 0;
module.exports = class Book {
  constructor(id, title, ISBN, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.ISBN = ISBN;
    this.publishedDate = publishedDate;
    this.author = author;
  }
  static save() {
    this.id = ID++;
    books.push(this);
    return this;
  }

  static getAll() {
    return books;
  }

  static getBookById(id) {
    const bookItem = books.find((b) => b.id == id);
    if (bookItem) {
      return bookItem;
    } else {
      throw new Error("There is no book in the library with id: " + id);
    }
  }

  static update(id) {
    const bookIndex = books.findIndex((b) => b.id == id);
    if (bookIndex > -1) {
      this.id = id;
      books[index] = this;
      return this;
    } else {
      throw new Error("There is no book in the library with id: " + id);
    }
  }
  static deleteById(id) {
    const bookIndex = books.findIndex((b) => b.id == id);
    if (bookIndex > -1) {
      const removedBook = books[bookIndex];
      books = books.filter((b) => b.id != id);
      return removedBook;
    } else {
      throw new Error("There is no book in the library with id: " + id);
    }
  }

  static deleteAll(){
    books=[];
  }
};
