import { Component, OnInit, Input } from '@angular/core';

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

@Component({
  selector: 'app-error-icon',
  templateUrl: './error-icon.component.html',
  styleUrls: ['./error-icon.component.css']
})
export class ErrorIconComponent implements OnInit {

  faExclamationCircle = faExclamationCircle;

  @Input() errorState: boolean;

  constructor() { }

  ngOnInit() {
  }

}
