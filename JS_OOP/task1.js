import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("Три товариші", "Еріх Марія Ремарк", 1936)
const book2 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1966)
const book3 = new Book("1984", "Джордж Орвелл", 1949)
book1.printInfo()
book2.printInfo()
book3.printInfo()
const ebook1 = new EBook("Три товариші", "Еріх Марія Ремарк", 1936, "PDF")
const ebook2 = new EBook("Гаррі Поттер і філософський камінь", "Джоан Роулінг", 1997, "EPUB")
ebook1.printInfo()
ebook2.printInfo()
const oldestBook = Book.findOldestBook([book1, book2, book3, ebook1, ebook2]);
console.log("Найдавніша книга:");
oldestBook.printInfo();
const ebook3 = EBook.fromBookAndFileFormat(book1, "PDF")
console.log("Електронна книга, створена зі звичайної книги:")
ebook3.printInfo()