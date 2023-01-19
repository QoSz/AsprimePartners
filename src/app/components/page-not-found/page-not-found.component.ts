import { Component } from '@angular/core';
import { faFaceFrown, IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  faFaceFrown: IconDefinition = faFaceFrown;

}
