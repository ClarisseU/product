import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  newProduct = new Product('', '', 0, '');
  @Output() addProduct = new EventEmitter<Product>();

  submitProduct() {
    this.addProduct.emit(this.newProduct);
      }

  constructor() { }

  ngOnInit() {
  }

}
