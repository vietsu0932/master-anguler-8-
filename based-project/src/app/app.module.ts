import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromoteCodeComponent } from './promote-code/promote-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CartHeaderComponent,
    CartSummaryComponent,
    ProductListComponent,
    PromoteCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
