import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: any;
  currentId!: number;
  address: any;

  constructor(
    private data: ServiceService,
    private route: ActivatedRoute
    ) { 
    route.params.subscribe((params)=> {
      this.currentId = params['id'];
    })
  }

  ngOnInit(): void {
    this.getUserById();
  }
  // get user detail information by id
  getUserById() {
    this.data.getUser(this.currentId).subscribe((res)=> {
      this.userDetails = res;
      this.address = this.userDetails.address
    })
  }
}
