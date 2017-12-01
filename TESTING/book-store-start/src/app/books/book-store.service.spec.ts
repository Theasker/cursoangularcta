import { BookStoreService } from './book-store.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/of';
import { Book } from './book';

describe('BookStoreService', () => {
    let bookStoreService: BookStoreService;
    let mockHttp;

    // Se ejecuta antes de cada uno de los it()
    // Le inyectamos el mock para que lo use en vez del http client
    beforeEach( () => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post', 'delete']);
        bookStoreService = new BookStoreService(mockHttp);
    });

    describe('deleteBook', () => {

        // Comprobaremos que el método delete() devuelve un observable del libro borrado
        it('se debería borrar un libro', () => {
            const book: Book = {
                id: 12,
                isbn: 895565,
                title: 'libro 1',
                authors: 'xxxx',
                published: 'fecha',
                description: 'libro 1 desc',
                coverImage: 'imagen portada'
            }
            const id = 12;
            mockHttp.delete.and.returnValue(Observable.of(book));
            const response = bookStoreService.deleteBook(12);
            response.subscribe( value => {
                expect(value).toBe(book);
            });
        })

        // Comprobación de la llegada de un párametro en un método
        it('Invocación del http es correcta y además el parámetro url tiene el valor correcto', () => {
            const id = 12;
            const url = `http://58e15045f7d7f41200261f77.mockapi.io/api/v1/books/${id}`;
            // Comprobamos a true xq no nos interesa la devolución de la función
            mockHttp.delete.and.returnValue(Observable.of(true));
            const response = bookStoreService.deleteBook(id);
            // jasmine.any(Object) es un objeto cualquiera
            expect(mockHttp.delete).toHaveBeenCalledWith(url, jasmine.any(Object));
        })
    })
});