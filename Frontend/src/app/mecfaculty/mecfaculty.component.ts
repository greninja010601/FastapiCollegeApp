import { Component, OnInit } from '@angular/core';
import {MecfacultyDataService} from '../services/mecfaculty-data.service'
@Component({
  selector: 'app-mecfaculty',
  templateUrl: './mecfaculty.component.html',
  styleUrls: ['./mecfaculty.component.css']
})
export class MecfacultyComponent  {

  mecfaculty:any;
  constructor(private mecfacultyData: MecfacultyDataService)
  {
    this.mecfacultyData.getmecfac().subscribe((data)=>{
      console.warn("data", data);
      this.mecfaculty=data
    });
}

  
url="./assets/img/mec.jpeg";
}
