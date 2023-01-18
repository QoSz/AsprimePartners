import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  faArrowLeft: IconDefinition = faArrowLeft;
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
