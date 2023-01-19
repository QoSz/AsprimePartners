import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CustomerSalesComponent } from './components/customer-sales/customer-sales.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer-sales', pathMatch: 'full'},
  { path: '', component: DashboardComponent, children: [
    { path: 'customer-sales', component: CustomerSalesComponent },
    { path: 'upload-documents', component: UploadDocumentComponent },
    { path: 'change-password', component: ChangePasswordComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
