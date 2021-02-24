import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-model';

@Component({
  selector: 'curso-crud-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }
  id:string = ''

  constructor(private router:Router, 
    private activateRoute: ActivatedRoute, 
    private productService: ProductService) 
    { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');

    this.productService.readById(this.id).subscribe(product => {
      this.product = product
    })
  }
  updateProduct(): void {
    this.productService.put(this.id, this.product).subscribe(success => {
      this.productService.showMessageResult("Produto editado com sucesso!",true)
      this.router.navigate(['/Products'])
    },
    error => {
      this.productService.showMessageResult("Ocorreu um erro ao editado o produto!",true)
    }) 
  }
  cancel(): void {
    this.router.navigate(['/Products'])
  }

}
