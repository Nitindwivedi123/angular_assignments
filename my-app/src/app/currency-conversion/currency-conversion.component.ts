import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.css']
})
export class CurrencyConversionComponent implements OnInit {
  @Input() type1="";
  @Input() curr1=0;
  @Input() type2="";

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if (this.type1=="UNDollar" && this.type2=="CNY"){
      this.curr1=this.curr1*6.76;
    }
    else if (this.type1=="UNDollar" && this.type2=="RUB"){
      this.curr1=this.curr1*57.0;
    }
    else if (this.type1=="UNDollar" && this.type2=="CANADIANDOLLAR"){
      this.curr1=this.curr1*1.30;
    }
    else if (this.type1=="UNDollar" && this.type2=="BajanDollar"){
      this.curr1=this.curr1*2.01;
    }
    else if (this.type1=="CNY" && this.type2=="UNDollar"){
      this.curr1=this.curr1*0.15;
    }
    else if (this.type1=="CNY" && this.type2=="RUB"){
      this.curr1=this.curr1*8.44;
    }
    else if (this.type1=="CNY" && this.type2=="CANADIANDOLLAR"){
      this.curr1=this.curr1*0.19;
    }
    else if (this.type1=="CNY" && this.type2=="BajanDollar"){
      this.curr1=this.curr1*0.30;
    }
    else if (this.type1=="RUB" && this.type2=="UNDollar"){
      this.curr1=this.curr1*0.018;
    }
    else if (this.type1=="RUB" && this.type2=="CNY"){
      this.curr1=this.curr1*0.12;
    }
    else if (this.type1=="RUB" && this.type2=="CANADIANDOLLAR"){
      this.curr1=this.curr1*0.023;
    }
    else if (this.type1=="RUB" && this.type2=="BajanDollar"){
      this.curr1=this.curr1*0.035;
    }
    else if (this.type1=="CANADIANDOLLAR" && this.type2=="UNDollar"){
      this.curr1=this.curr1*0.77;
    }
    else if (this.type1=="CANADIANDOLLAR" && this.type2=="CNY"){
      this.curr1=this.curr1*5.19;
    }
    else if (this.type1=="CANADIANDOLLAR" && this.type2=="RUB"){
      this.curr1=this.curr1*43.85;
    }
    else if (this.type1=="CANADIANDOLLAR" && this.type2=="BajanDollar"){
      this.curr1=this.curr1*1.55;
    }
    else if (this.type1=="BajanDollar" && this.type2=="UNDollar"){
      this.curr1=this.curr1*0.50;
    }
    else if (this.type1=="BajanDollar" && this.type2=="CNY"){
      this.curr1=this.curr1*3.36;
    }
    else if (this.type1=="BajanDollar" && this.type2=="RUB"){
      this.curr1=this.curr1*28.32;
    }
    else if (this.type1=="BajanDollar" && this.type2=="CANADIANDOLLAR"){
      this.curr1=this.curr1*0.65;
    }
  }
}
