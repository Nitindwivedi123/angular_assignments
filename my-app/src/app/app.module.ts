import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { HttpClientModule } from '@angular/common/http';
//import { Ng2OrderModule } from 'ng2-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
