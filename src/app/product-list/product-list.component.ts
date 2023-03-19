import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] | undefined = [];

  constructor(private productService: ProductService) {

  }
  async ngOnInit() {
    this.products = await this.productService.getProducts();
    console.log('load après');
  }

  share() {
    window.alert('The product has been shared!');
  }
}