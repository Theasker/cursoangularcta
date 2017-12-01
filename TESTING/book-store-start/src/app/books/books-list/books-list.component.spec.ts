import { BooksListComponent } from 'app/books/books-list/books-list.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('Lógica del BookListComponent', () => {
    // Declaración del componente
    let bookListComponent: BooksListComponent;
    let mockBookStoreService;

    beforeEach( () => {
        // Creo el mock para poder probar que funciona todo sin usar el servicio
        mockBookStoreService = jasmine.createSpyObj('mockBookStoreService', ['getBooks']);
        // Inyectamos el mock en el constructor del comonente 
        // que sustituye al servicio que tiene en realidad inyectado
        bookListComponent = new BooksListComponent(mockBookStoreService);
    })

    it('Lista de libros inicialmente vacía', () => {
        const numBooks = bookListComponent.booksList.length;
        expect(numBooks).toBe(0);
        // Que no sea 0
        // expect(numBooks).not.toBe(0);
    });

    describe('ngOnInit', () => {
        it('Acceso a booklist', () => {
            const books = [{}, {}]; // Le decimos que haya 2 elementos para el mock
            // Cuando alguien invoque al mockBookStoreService devolverá un Observable de books
            mockBookStoreService.getBooks.and.returnValue(Observable.of(books));
            // Forzamos la ejecución del ngOnInit() para que cargue los 2 elementos que recupera del mock
            bookListComponent.ngOnInit();
            // Comprobamos si la longitud del array es de 2 elementos
            expect(bookListComponent.booksList.length).toBe(2);
        });
    });

})
