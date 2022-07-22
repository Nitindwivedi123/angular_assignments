import { Component,Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  ordername=false
  orderage=false
  constructor(private appService: ServiceService) { }
  data : any
  temp_data:any
  
  ngOnInit(): void {
    this.appService.getData().subscribe((res:any) => {
      this.data= res
    });
  }
  orderName(){
    this.ordername=true
    this.orderage=false
    this.temp_data=this.data
    this.temp_data.sort((a:any, b:any) => (a.name > b.name) ? 1 : -1)

  }
  orderAge(){
    this.orderage=true
    this.ordername=false
    this.temp_data=this.data
    this.temp_data.sort((a:any, b:any) =>new Date(a.age).getTime() - new Date(b.age).getTime())
    
  }
  
}
