import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-model';

@Component({
  selector: 'curso-crud-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products:Product[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(this.products)
    }
    )
  }

  ngAfterViewInit() {
  }

}
