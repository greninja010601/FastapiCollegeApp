import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MecfacultyDataService {
  constructor(private http:HttpClient) { }
  getmecfac()
  {
    let url="/mec";
    return this.http.get(url);
  }
}
