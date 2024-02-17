export default class Book {
    constructor(title, author, yearOfPublication) {
        this._title = title
        this._author = author
        this._yearOfPublication = yearOfPublication
    }

    get title() {
        return this._title
    }

    set title(value) {
        if (typeof value !== 'string') {
            console.warn("title should be type of string")
            return
        }

        if (value.length < 1) {
            console.warn("title should be at least 1 symbol")
            return
        }
        this._title = value
    }

    get author() {
        return this._author
    }

    set author(value) {
        if (typeof value !== 'string') {
            console.warn("author should be type of string")
            return
        }

        if (value.length < 1) {
            console.warn("author should be at least 1 symbol")
            return
        }
        this._author = value
    }

    get yearOfPublication(){
        return this._yearOfPublication
    }
    set yearOfPublication(value){
        if (typeof value !== 'number') {
            console.warn("year of publication should be type of number")
            return
        }

        if (value.length < 3) {
            console.warn("year of publication should be at least 3 symbol")
            return
        }
        this._yearOfPublication = value
    }
    printInfo() {
        console.log(`Назва: ${this._title}, Автор: ${this._author}, Рік видання: ${this._yearOfPublication}`)
    }
    static findOldestBook(books) {
        const sortedBooks = books.sort((a, b) => a.year - b.year);
        return sortedBooks[0];
    }
}