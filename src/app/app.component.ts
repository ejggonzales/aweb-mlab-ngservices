import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'ng-pipes-demo';
  presentDate = new Date();

  time$ = interval(1000).pipe(
    map(() => new Date())
  );

  testObject = {
    name: 'Ethan James G. Gonzales',
    age: 20,
    food: 'Pizza'
  }

  testArray = [1, 2, 3, 4, 5, 6,];

  price: number = 20000 

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  decimalNum3: number = 2.426

  // todaydate;
  // constructor(private myservice:MyserviceService) {
  //   this.todaydate = this.myservice.showTodayDate();
  // }

  todaydate;
  componentproperty;
  constructor(private myservice:MyserviceService) {
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}

// export class TestComponent implements OnInit {
//   price: number = 20000; ngOnInit() {
    
//   }
// }



