import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/components/admin/content-right/dashboard/dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardComponent, children:[
      {
        path:'',
        component:DashboardComponent
      },
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),

  ]
})
export class DashboardModule { }
