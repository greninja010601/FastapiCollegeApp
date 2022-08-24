import { Component, OnInit } from '@angular/core';
import {EcefacultyDataService} from '../services/ecefaculty-data.service';
@Component({
  selector: 'app-ecefaculty',
  templateUrl: './ecefaculty.component.html',
  styleUrls: ['./ecefaculty.component.css']
})
export class EcefacultyComponent  {

 ecefaculty:any;
  constructor(private ecefacultyData: EcefacultyDataService)
  {
    this.ecefacultyData.getecefac().subscribe((data)=>{
      console.warn("data", data);
      this.ecefaculty=data
    });
}

  url="./assets/img/ece.jpg";

}
