import { Category } from './enums';

export interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
}

interface Person {
    name: string;
    email: string;
}

export interface Librarian extends Person {
    department: string;
    assistCustomer:(cusName: string) => void;
}

export interface Author extends Person {
    numBooksPublished: number;
}