import { Component, OnInit } from '@angular/core';
import {CivilfacultyDataService} from '../services/civilfaculty-data.service';
@Component({
  selector: 'app-civilfaculty',
  templateUrl: './civilfaculty.component.html',
  styleUrls: ['./civilfaculty.component.css']
})
export class CivilfacultyComponent {

  civilfaculty:any;
  constructor(private civilfacultyData: CivilfacultyDataService)
  {
    this.civilfacultyData.getcivilfac().subscribe((data)=>{
      console.warn("data", data);
      this.civilfaculty=data
    });
}
   url="./assets/img/civil.jpg";
}
