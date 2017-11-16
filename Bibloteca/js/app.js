"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
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
function display(data) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        console.log('libro: ', item.id, item.title, item['author']);
    }
}
function getAvailableBooks(data) {
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