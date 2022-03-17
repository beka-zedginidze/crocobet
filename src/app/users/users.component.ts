import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData: any;
  currentId!: number;

  constructor(private data: ServiceService,) { }

  ngOnInit(): void {
    this.getUserList();
  }
  //get all user list
  getUserList() {
    this.data.getUsers().subscribe((res) => {
      this.userData = res;
    })
  }

}
