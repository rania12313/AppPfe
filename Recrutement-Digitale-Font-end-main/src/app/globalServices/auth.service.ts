import { Injectable } from '@angular/core';
import { API_BASE_URL, BASE_URL } from '../cvs/myConfigs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Observable, Subject, map } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  login(user: any): Observable<any> {
    console.log(user);

    return this.http
      .post<HttpResponse<any>>(
        BASE_URL + '/signin',
        {
          username: user.email,
          password: user.password,
        },
        {
          observe: 'response', // Observe the full HTTP response
        }
      )
      .pipe(
        map((response: HttpResponse<any>) => {
          const token = response.headers.get('Authorization');
          const user = response.body.user;

          if (token) {
            this.localStorageService.addItem('token', token);
            this.localStorageService.addObject('user', user);
            window.location.href = '/dashboard';
            if (user.userRole === 'SupAdmin') {
              window.location.href = '/dashboard';
            } else {
              window.location.href = '/dashbord-users';
            }
          } else {
            console.error('No token found in response headers');
          }
          return response;
        })
      );
  }

  register(user: any): Observable<any> {
    console.log(user);

    return this.http.post(BASE_URL + '/signup', {
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

  isAuthenticated(): boolean {
    const token = this.localStorageService.getItem('token');
    return !!token;
  }

  logout() {
    this.localStorageService.removeManyItems(['token', 'user']);
    window.location.href = '/';
  }

  private triggerSubject = new Subject<string>();

  get onTrigger(): Observable<string> {
    return this.triggerSubject.asObservable();
  }

  requestConfirmation(message: string) {
    this.triggerSubject.next(message);
  }
}
