import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CustomerSalesComponent } from './components/customer-sales/customer-sales.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CustomerSalesComponent,
    UploadDocumentComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
