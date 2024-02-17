import Book from "./Book.js";

export default class EBook extends Book {
constructor(title, author, yearOfPublication, fileFormat) {
    super(title, author, yearOfPublication)
    this._fileFormat = fileFormat
}
    get fileFormat(){
        return this._fileFormat
    }
    set fileFormat(value){
        if (typeof value !== 'string') {
            console.warn("file format should be type of string")
            return
        }
        this._fileFormat = value
    }
    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this._fileFormat}`);
    }
    static fromBookAndFileFormat(book, fileFormat){
        return new EBook(book.title, book.author, book.yearOfPublication, fileFormat)
    }
}
