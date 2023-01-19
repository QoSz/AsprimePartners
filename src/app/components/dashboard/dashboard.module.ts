import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CustomerSalesComponent } from './components/customer-sales/customer-sales.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbdDatepickerRangePopup } from './components/datepicker-range-popup/datepicker-range-popup.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CustomerSalesComponent,
    UploadDocumentComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxDropzoneModule,
    FontAwesomeModule,
    NgbdDatepickerRangePopup
  ],
  exports: [DashboardComponent, CustomerSalesComponent, UploadDocumentComponent, ChangePasswordComponent]
})
export class DashboardModule { }
