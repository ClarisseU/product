import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    new Product('keyboard', 'wireless computer keyboard', 45000, '24/07/2019'),
    new Product('USB', 'Flash Disk', 10000, '02/01/2020'),
  ];

  // function to show details
  toggleDetails(index) {
    this.products[index].showDetail = !this.products[index].showDetail;
  }
  // function to delete a product
  completeProduct(isComplete, index) {
    if (isComplete) {
      this.products.splice(index, 1);
    }
  }
  // deleteProduct(isComplete, index) {
  //   if (isComplete) {
  //     let toDelete = confirm(`Are you sure you want to delete ${this.products[index].name}?`);

  //     if (toDelete) {
  //       this.products.splice(index, 1 );
  //     }
  //   }
  // }

  addNewProduct(product) {
    let productLength = this.products.length;
    product.id = productLength + 1 ;
    // product.completeDate = new Date(product.completeDate);
    this.products.push(product);
  }
  constructor() { }

  ngOnInit() {
  }

}
