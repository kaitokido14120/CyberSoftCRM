import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Module
import { LmsModule } from './lms/lms.module';
import { DashboardModule } from './dashboard/dashboard.module';

// Component
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { HeaderComponent } from 'src/app/components/admin/header/header.component';
import { ButtonAnimationComponent } from 'src/app/components/admin/header/button-animation/button-animation.component';
import { NavbarLeftComponent } from 'src/app/components/admin/navbar-left/navbar-left.component';
import { ContentRightComponent } from 'src/app/components/admin/content-right/content-right.component';

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent, children:[
      {
        path:'dashboard',
        loadChildren: () => DashboardModule
      },
      {
        path:'lms',
        loadChildren: () => LmsModule
      },
    ]
  }
];

@NgModule({
  declarations: [AdminComponent,HeaderComponent,ButtonAnimationComponent,NavbarLeftComponent,ContentRightComponent],
  imports: [
    CommonModule,
    LmsModule,
    DashboardModule,
    RouterModule.forChild(adminRoutes),
  ],

})
export class AdminModule { }
