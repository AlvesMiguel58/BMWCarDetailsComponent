import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  @Input()
  car: any;

  constructor() { }

  ngOnInit(): void {
    //add viewCar property to car object
    this.car.viewCar = { outside: true, inside: false };
    console.log('passed car', this.car)
  }

  viewOption(view: any) {
    // console.log('view', view);
    if (view.viewCar.inside) {
      this.car.viewCar.outside = true;
      this.car.viewCar.inside = false;
    } else {
      this.car.viewCar.outside = false;
      this.car.viewCar.inside = true;
    }
  }

}
