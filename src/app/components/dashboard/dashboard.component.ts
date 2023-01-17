import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string = "Customer Sales"
  faSackDollar: IconDefinition = faSackDollar;
  faCloudArrowUp: IconDefinition = faCloudArrowUp;
  faKey: IconDefinition = faKey;
  faCircleUser: IconDefinition = faCircleUser;

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