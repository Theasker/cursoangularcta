import {Category} from './enums';

interface Book{
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category; // Propiedad importada del enum
    pages?: number;     // Propiedad opcional
};

interface Person {
    name: string;
    email: string;
}

// Interfaz que hereda de Person
interface Librarian extends Person {
    department: string;
    // Le decimos que tiene que implementar una función 
    // con ese nombre (assisCustomer) que reciba un sting y no devuelva nada
    assisCustomer: (string) => void;
}

interface Author extends Person {
    numBooksPublished: number;
}

export {Book, Librarian, Author};