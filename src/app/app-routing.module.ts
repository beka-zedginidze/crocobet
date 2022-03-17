import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: "", component: UsersComponent},
  {path: "detail-info/:id", component: UserDetailsComponent},
  {path: "user-posts/:id", component: UserPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
