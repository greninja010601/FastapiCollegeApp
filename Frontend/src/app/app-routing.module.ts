import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { CseComponent } from './cse/cse.component';
import { MecComponent } from './mec/mec.component';
import { EceComponent } from './ece/ece.component';
import { CivilComponent } from './civil/civil.component';
import { CsefacultyComponent } from './csefaculty/csefaculty.component';
import { CivilfacultyComponent } from './civilfaculty/civilfaculty.component';
import { EcefacultyComponent } from './ecefaculty/ecefaculty.component';
import { MecfacultyComponent } from './mecfaculty/mecfaculty.component';

const routes: Routes = [
{path:'ComputerScienceEngineering', component: CseComponent},
{path:'MechanicalEngineering', component: MecComponent},
{path:"ElectricalCommunicationsEngineering", component:EceComponent},
{path:"CivilEngineering", component:CivilComponent},
{path:"ComputerScienceFaculty", component: CsefacultyComponent },
{path:"MechanicalFaculty", component: MecfacultyComponent},
{path:"ElectricalCommunicationsFaculty", component:EcefacultyComponent},
{path: "CivilFaculty", component:CivilfacultyComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CseComponent, MecComponent, EceComponent, CivilComponent, CsefacultyComponent, MecfacultyComponent
,EcefacultyComponent,CivilfacultyComponent]
