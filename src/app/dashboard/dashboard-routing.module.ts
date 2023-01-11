import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CustomerSalesComponent } from './components/customer-sales/customer-sales.component';
import { UploadDocumentsComponent } from './components/upload-documents/upload-documents.component';

const routes: Routes = [
  { path: 'dashboard/customer-sales', component: CustomerSalesComponent },
  { path: 'dashboard/change-password', component: ChangePasswordComponent },
  { path: 'dashboard/upload-documents', component: UploadDocumentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
