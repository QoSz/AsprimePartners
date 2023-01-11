import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CustomerSalesComponent } from './components/customer-sales/customer-sales.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'upload-documents', component: UploadDocumentComponent },  
  { path: 'customer-sales', component: CustomerSalesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
