import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${environment.API_URL}/users`);
  }

  getPosts(): Observable<any> {
    return this.http.get(`${environment.API_URL}/posts`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/users/` + id);

  }

  getPost(id: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/posts?userId=` + id);
  }

}
