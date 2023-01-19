import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerSalesComponent } from './components/dashboard/components/customer-sales/customer-sales.component';
import { UploadDocumentComponent } from './components/dashboard/components/upload-document/upload-document.component';
import { ChangePasswordComponent } from './components/dashboard/components/change-password/change-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', pathMatch: 'full', redirectTo: 'dashboard/customer-sales' },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'customer-sales', component: CustomerSalesComponent },
    { path: 'upload-documents', component: UploadDocumentComponent },
    { path: 'change-password', component: ChangePasswordComponent },
  ]},
  { path: '**', redirectTo: '/page-not-found' },
  { path: 'page-not-found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
