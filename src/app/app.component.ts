import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    new Product('keyboard', 'wireless computer keyboard', 45000, '24/07/2019'),
    new Product('USB', 'Flash Disk', 10000, '02/01/2020'),
  ];
}
