import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


// component
import { LmsComponent } from './lms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ButtonModule} from 'primeng/button';



const lmsRoutes: Routes = [
  {
    path: 'lms', component: LmsComponent, children:[
      {
        path:'dashboard', component: DashboardComponent
      }
    ]
  },
];

@NgModule({
  declarations: [LmsComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(lmsRoutes),
    ButtonModule
  ]
})
export class LmsModule { }
