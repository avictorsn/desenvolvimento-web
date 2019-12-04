import { Component, OnInit } from '@angular/core';

import { faHammer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-under-maintenance',
  templateUrl: './under-maintenance.component.html',
  styleUrls: ['./under-maintenance.component.css']
})
export class UnderMaintenanceComponent implements OnInit {

  faHammer = faHammer;

  constructor() { }

  ngOnInit() {
  }

}
