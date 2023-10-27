import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  baseUrl = 'http://localhost:4200/home';

  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    const url = `${this.baseUrl}/RegisterUser`;
    return this.http.post(url, user, { responseType: 'text' });
  }
}
