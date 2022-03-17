import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  currentId!: number;
  posts: any;
  userId!: number;

  constructor(
    private data: ServiceService,
    private route: ActivatedRoute
  ) { 
    route.params.subscribe((params)=> {
      this.currentId = params['id'];
    })
  }

  ngOnInit(): void {
    this.getUserPostsById();
  }

  getUserPostsById() {
    this.data.getPost(this.currentId).subscribe((res)=> {
      this.posts = res;
      
      for(let i of this.posts) {
        this.userId = i.userId
      };
    })
  }
}
