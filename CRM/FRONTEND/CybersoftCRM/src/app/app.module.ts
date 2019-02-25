import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

// Modules
import { PrimengModule } from 'src/core/common/primeng.module';
import { AdminModule } from './modules/admin/admin.module';
import { TransferDataService } from 'src/core/services/admin/transferData.service';


const appRoutes: Routes = [
  {
    path:'admin', 
    loadChildren: () => AdminModule
  }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
  ],
  providers: [TransferDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
