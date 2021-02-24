import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from '../components/product/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar:MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'',{
      duration:3000,
      horizontalPosition:"center",
      verticalPosition:"bottom"
    })
  }
  showMessageResult(msg: string, result:boolean): void {
        this.snackBar.open(msg,'',{
      duration:3000,
      horizontalPosition:"center",
      verticalPosition:"bottom",
      panelClass: result ? ['msg-error']:['msg-success']
    })
  }

  create(product: Product):Observable<Product> {
    return this.http.post<Product>(this.baseUrl,product)
  }

  read():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id:string):Observable<Product> {
    return this.http.get<Product>(this.baseUrl.concat("/",id))
  }

  put(id:string, product: Product):Observable<Product> {
    return this.http.put<Product>(this.baseUrl.concat("/",id), product)
  }

  // patch(product: Product):Observable<Product[]> {
  //   return this.http.get<Product>(this.baseUrl)
  // }

  delete(id: string):Observable<Product> {
    return this.http.delete<Product>(this.baseUrl.concat("/",id))
  }
}
