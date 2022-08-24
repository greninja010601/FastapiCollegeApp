import { Component, OnInit } from '@angular/core';
import {CsefacultyDataService} from '../services/csefaculty-data.service';
@Component({
  selector: 'app-csefaculty',
  templateUrl: './csefaculty.component.html',
  styleUrls: ['./csefaculty.component.css']
})
export class CsefacultyComponent {

  csefaculty:any;
  constructor(private csefacultyData: CsefacultyDataService)
  {
    this.csefacultyData.getcsefac().subscribe((data)=>{
      console.warn("data", data);
      this.csefaculty=data
    });
}
 url="./assets/img/cse.jpg";
}
