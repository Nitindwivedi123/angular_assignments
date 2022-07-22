import { Component } from '@angular/core';

interface Currency {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currency1=0;
  type1="";
  type2="";


}
