import {Book} from './interfaces';
import {Category} from './enums';

function getAllbooks():Book[]{
    let books:Book[] = [
        {id:1, title: 'Titulo1', author: 'autor1', available: true, category: Category.FICCION},
        {id:2, title: 'Titulo2', author: 'autor2', available: false, category: Category.POESIA},
        {id:3, title: 'Titulo3', author: 'autor3', available: true, category: Category.TECNICO},
        {id:4, title: 'Titulo4', author: 'autor4', available: true, category: Category.POESIA},
        {id:5, title: 'Titulo5', author: 'autor5', available: false, category: Category.FICCION},
    ];
    return books;
}

function display(data:Book[]){
    for(let item of data){
        console.log('libro: ', item.id, item.title, item['author']);
    }
}

function getAvailableBooks(data:Book[]): Book[]{
    let available:Book[] = [];
    for(let item of data){
        if (item.available){
            available.push(item);
        }
    }
    return available;
}

function getAvailableFilterBooks(data:Book[]): Book[]{
    return data.filter( (valor) => {valor.available}  )
}

function getBooksByCategory(cat: Category = Category.TECNICO): Book[]{
    return getAllbooks().filter( (valor) => {return valor.category === cat} );
}

function getBooksById(id: number): Book[]{
    return getAllbooks().filter( valor => valor.id === id )
}

function createUser(nombre:string, age?:number, city?:string){
    if(age){

    }
    if(city){

    }
}

function checkoutBooks(name:string, ...bookIds:number[]):Book{
    let books:Book[] = getAvailableBooks(getAllbooks());
    let checkBooks: Book[] = [];

    for(let id of bookIds){
        for(let book of books){
            if(book.id === id){
                checkBooks.push(book);
            }
        }
    }
    return checkBooks;    
}


let libros:Book[];
libros = getAllbooks();
//display(available(libros));

console.log('Libros filtrados disponibles:');
display(getAvailableFilterBooks(libros));
console.log('Libros filtrados por categoria:');
display(getBooksByCategory(Category.FICCION));
console.log('Libros filtrados por categoria con parámetro por defecto:');
display(getBooksByCategory());

let book: any = getBooksById(2);
if (book !== null){
    console.log('Libros filtrados por id:');
    display(book);
}

console.log('Checkout de varios libros:');
display(checkoutBooks('Mauri',1,2,7,18,43));