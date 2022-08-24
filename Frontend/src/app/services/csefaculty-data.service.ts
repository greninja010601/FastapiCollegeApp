import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CsefacultyDataService {
  constructor(private http:HttpClient) { }
  getcsefac()
  {
    let url="/cse";
    return this.http.get(url);
  }
}
