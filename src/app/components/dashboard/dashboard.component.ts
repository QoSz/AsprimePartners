import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string = "Customer Sales"

  constructor(private location: Location  ) {}

  ngOnInit() {
    const fullUrl: string = this.location.path().replace('/dashboard/', '');
    if (fullUrl == "customer-sales") {
      this.title = "Customer Sales";
    } else if (fullUrl == "upload-documents") {
      this.title = "Upload Document";
    } else if (fullUrl == "change-password") {
      this.title = "Change Password";
    } else {
      this.title = "Customer Sales";  
    }
  }

  updatePageTitle(title: string): void {
    this.title = title;
  }
}