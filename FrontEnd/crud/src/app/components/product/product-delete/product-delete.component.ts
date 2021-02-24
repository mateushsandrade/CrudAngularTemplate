import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-model';

@Component({
  selector: 'curso-crud-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  id: string = ''
  product: Product = {
    name: '',
    price: null
  }

  constructor(private activatedRouter: ActivatedRoute,
    private snack:MatSnackBar,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get("id")

    this.productService.readById(this.id).subscribe(product => {
      this.product = product
    })
  }
  deleteProduct() { 
    this.productService.delete(this.id).subscribe(success => {
      this.productService.showMessageResult("Produto excluido com sucesso!", true)
      this.router.navigate(['/Products'])
    },
    error =>{
      this.productService.showMessageResult("Ocorreu um erro ao excluir o produto!", false)
    }
    )
  }
  cancel() {
    this.router.navigate(['/Products'])
  }

}
