import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LmsComponent } from 'src/app/components/admin/lms/lms.component';
import { DashboardComponent } from 'src/app/components/admin/lms/dashboard/dashboard.component';



const lmsRoutes: Routes = [
  {
    path: '', component: LmsComponent, children:[
      {
        path:'dashboard',
        component: DashboardComponent
      }
    ]
  },
  
];

@NgModule({
  declarations: [LmsComponent,DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(lmsRoutes)
  ]
})
export class LmsModule { }
