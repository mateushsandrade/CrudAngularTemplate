import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavbarComponent } from './components/templates/navbar/navbar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import  {MatCurrencyFormatModule} from 'mat-currency-format';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { CurrencyDirective } from './directives/currency.directive';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    CurrencyDirective,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule, 
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    CurrencyMaskModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCurrencyFormatModule    
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue:'pt-BR'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
