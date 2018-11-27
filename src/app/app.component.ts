import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pipes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes demo';

  builtinpipes= ['AsyncPipe',  'DatePipe' , 'JsonPipe',  'LowerCasePipe' ,
  'CurrencyPipe',  'DecimalPipe',  'PercentPipe',  'SlicePipe',  'UpperCasePipe'];


  alphabets= ['a', 'b', 'c', 'd', 'e'];

  //courseCompletion = 0.5;
  courseCompletion = 0.0512345;

  pi = 3.141592;
  e = 2.718281828459045;

  hourlyWage= 35;

  studnet: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  today: number = Date.now();
  camelCasePipe = 'Testing a custom pipe';
  constructor(private _datePipe: DatePipe) {
    //this._datePipe= new DatePipe('en');
  }

  getShortDate() {

    return this._datePipe.transform(this.today, 'M-d-y');
  }
  
}
