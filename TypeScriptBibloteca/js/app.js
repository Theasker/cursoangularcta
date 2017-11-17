"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var classes_1 = require("./classes");
// TASK: Obtener todos los libros
function getAllbooks() {
    var books = [
        { id: 1, title: 'Titulo1', author: 'autor1', available: true, category: enums_1.Category.FICCION },
        { id: 2, title: 'Titulo2', author: 'autor2', available: false, category: enums_1.Category.POESIA },
        { id: 3, title: 'Titulo3', author: 'autor3', available: true, category: enums_1.Category.TECNICO },
        { id: 4, title: 'Titulo4', author: 'autor4', available: true, category: enums_1.Category.POESIA },
        { id: 5, title: 'Titulo5', author: 'autor5', available: false, category: enums_1.Category.FICCION },
    ];
    return books;
}
// Uso de la herencia y polimorfismo
var bibliotecario = new classes_1.UniversityLibrarian();
// TASK: Visualizar los datos de tipo libro que le pasamos
function display(data) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        console.log('libro: ', item.id, item.title, item['author']);
    }
}
// Obtener todos los libros disponibles de unos pasados como parámetro.
// Si no se le pasa nada, por defecto, obtenemos todos los libros
function getAvailableBooks(data) {
    if (data === void 0) { data = getAllbooks(); }
    var available = [];
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var item = data_2[_i];
        if (item.available) {
            available.push(item);
        }
    }
    return available;
}
function getAvailableFilterBooks(data) {
    return data.filter(function (valor) { valor.available; });
}
function getBooksByCategory(cat) {
    if (cat === void 0) { cat = enums_1.Category.TECNICO; }
    return getAllbooks().filter(function (valor) { return valor.category === cat; });
}
function getBooksById(id) {
    return getAllbooks().filter(function (valor) { return valor.id === id; });
}
function createUser(nombre, age, city) {
    if (age) {
    }
    if (city) {
    }
}
function checkoutBooks(name) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    var books = getAvailableBooks(getAllbooks());
    var checkBooks = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var id = bookIds_1[_a];
        for (var _b = 0, books_1 = books; _b < books_1.length; _b++) {
            var book_1 = books_1[_b];
            if (book_1.id === id) {
                checkBooks.push(book_1);
            }
        }
    }
    return checkBooks;
}
function checkoutBooks2(name) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    var booksCheckout = [];
    /*
    //aproximacion clasica
    for(let ident of bookIds){
        let book = getBookById(ident);
        if (book && book.available){
            booksCheckout.push(book);
        }
    }
    */
    //aproximacion funcional
    /*
    booksCheckout = bookIds.filter(function(ident){
        let book = getBookById(ident);
        console.log(book.title);
        return book && book.available;
    });
    */
    booksCheckout = getAllbooks().filter(function (book) {
        //let book = getBookById(ident);
        return (bookIds.indexOf(book.id) != -1) && book.available;
    });
    /*
    //aproximacion funcional - ARROW
    booksCheckout = bookIds.filter((ident) => {
        let book = getBookById(ident);
        return book && book.available;
    });
    */
    return booksCheckout;
}
var libros;
libros = getAllbooks();
//display(available(libros));
console.log('Libros filtrados disponibles:');
display(getAvailableFilterBooks(libros));
console.log('Libros filtrados por categoria:');
display(getBooksByCategory(enums_1.Category.FICCION));
console.log('Libros filtrados por categoria con parámetro por defecto:');
display(getBooksByCategory());
var book = getBooksById(2);
if (book !== null) {
    console.log('Libros filtrados por id:');
    display(book);
}
console.log('Checkout de varios libros:');
display(checkoutBooks('Mauri', 1, 2, 7, 18, 43));
//# sourceMappingURL=app.js.map