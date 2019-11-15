import { ApiService } from '../../services/api/api.service';
import { User } from './../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generico',
  templateUrl: './generico.component.html',
  styleUrls: ['./generico.component.css']
})
export class GenericoComponent implements OnInit {

  list: User[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    return this.apiService.getUsers()
    .subscribe((data) => {this.list = data; console.log(this.list);
    });
  }

}
