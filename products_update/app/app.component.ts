import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [RouterLink]="['/welcome']">Home</a></li>
                    <li><a [RouterLink]="['/products']">Product</a></li>
                    <li><a [RouterLink]="['/productEdit']">Procut (Add | Update)</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}

