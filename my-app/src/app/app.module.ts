import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CurrencyConversionComponent } from './currency-conversion/currency-conversion.component';
@NgModule({
  declarations: [
    AppComponent,
    CurrencyConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
