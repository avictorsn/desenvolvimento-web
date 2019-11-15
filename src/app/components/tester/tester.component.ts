import { Component, OnInit, Output, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  list: User[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    return this.apiService.getUsers()
    .subscribe((data) => {this.list = data; console.log(this.list);
    });
  }


}
