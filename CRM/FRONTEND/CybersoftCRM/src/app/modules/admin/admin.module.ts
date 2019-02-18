import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// modules
import { LmsModule } from './lms/lms.module';


// components
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent, children:[
      {
        path:'lms',
        loadChildren: () => LmsModule
      }
    ]
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    LmsModule,
    RouterModule.forChild(adminRoutes),
  ]
})
export class AdminModule { }
