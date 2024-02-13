import { AfterViewInit, Component } from '@angular/core';
import * as myData from '../assets/data/model-cart-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  title = 'BMW-Front-End-Test';

  cars: any = myData;

  constructor() {

  }

  ngAfterViewInit() {
    // console.log(this.cars.default.models.vehicleDetails.list);
  }
}
