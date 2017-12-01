import { AppComponent } from './app.component';

describe('AppComponent test', () => {
    let component: AppComponent;

    beforeEach( () => {
        component = new AppComponent();
    })

    it('name esta ninicializado con el valor Angular', () => {
        // Espero que la variable name del componente sea igual a
        expect(component.name).toBe('Angular');
    })

    it('name el valor Angular X', () => {
        // Si cambiamos el valor de una variable name concuerda con lo que hemos cambiado
        component.name = 'Angular X';
        expect(component.name).toBe('Angular X');
    })
});
