import { Component ,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private appService: ServiceService) {}
  data : any
 
  ngOnInit(): void {
    this.appService.getData().subscribe((res:any) => {
      this.data= res
    })
  }
}
