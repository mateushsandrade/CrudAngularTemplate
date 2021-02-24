import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Product } from '../product-model';

@Component({
  selector: 'curso-crud-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product:Product = {
    name : '',
    price : null
  }

  constructor(private productService: ProductService,
    private router:Router) { }

  ngOnInit(): void {
  }
  creatProduct(): void {
    this.productService.create(this.product).subscribe(success => {
      this.productService.showMessageResult("Produto criado com sucesso!",true)
      this.router.navigate(['/Products'])
    },
    error => {
      this.productService.showMessageResult("Ocorreu um erro ao criar o produto!",false)
    }) 
  }
  cancel(): void {
    this.router.navigate(['/Products'])
  }

}
