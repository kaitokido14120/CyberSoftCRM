import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

// Modules
import { AdminModule } from './modules/admin/admin.module';
import { PrimengModule } from './core/common/primeng.module';


const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () => AdminModule
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
