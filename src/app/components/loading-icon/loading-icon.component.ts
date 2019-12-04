import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.css']
})
export class LoadingIconComponent implements OnInit {

  @Input() loadingState: boolean;
  @Input() errorState: boolean;

  constructor() { }

  ngOnInit() {
  }

}
