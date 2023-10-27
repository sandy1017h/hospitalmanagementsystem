import { Injectable } from '@angular/core';
import { User } from './models';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {
  changeCart: any;

  constructor(private jwt:JwtHelperService) { }

  getUser(): User {
    let token = this.jwt.decodeToken();
    let user: User = {
      id: token.id,
      firstName: token.firstName,
      lastName: token.lastName,
      address: token.address,
      mobile: token.mobile,
      email: token.email,
      password: '',
      createdAt: token.createdAt,
      modifiedAt: token.modifiedAt,
    };
    return user;
  }
}
