import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl : string = 'http://localhost:8081';

  constructor(private _http: HttpClient) { }

  //Load all categories
  public categories(): Observable<any[]>
  {
    return this._http.get<any[]>(`${this.baseUrl}/category/`);
  }

  //add new category
  public addCategory(category: any) {
    return this._http.post(`${this.baseUrl}/category/`, category);
  }
}
