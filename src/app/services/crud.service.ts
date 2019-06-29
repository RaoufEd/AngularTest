import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

const apiurl = "http://localhost:3000/"
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getAllProducts() {

    return this.http.get(apiurl + "produits");

  }
  createProduct(data) {
    return this.http.post(apiurl + "produits", data);
  }
  updateProductById(id, data) {
    return this.http.put(apiurl + "produit/" + id, data);
  }
  deleteProductById(id) {
    return this.http.delete(apiurl + "produit/" + id);
  }
  getProductById(id) {
    return this.http.get(apiurl + "produit/" + id);
  }
}
