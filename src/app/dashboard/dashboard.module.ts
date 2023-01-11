import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CustomerSalesComponent } from './components/customer-sales/customer-sales.component';
import { UploadDocumentsComponent } from './components/upload-documents/upload-documents.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


@NgModule({
  declarations: [
    CustomerSalesComponent,
    UploadDocumentsComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
