import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EcefacultyDataService {

  constructor(private http:HttpClient) { }
  getecefac()
  {
    let url="/ece";
    return this.http.get(url);
  }
}
