import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CivilfacultyDataService {

  constructor(private http:HttpClient) { }
  getcivilfac()
  {
    let url="/civil";
    return this.http.get(url);
  }
}
