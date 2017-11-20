import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from './products/product.service';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }