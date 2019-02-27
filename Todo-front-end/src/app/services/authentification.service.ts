import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationBean } from 'src/models/authenticateBean';
import { map } from 'rxjs/operators';
import { API_URL, AUTHENTICATED_USER, TOKEN } from 'src/models/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {

    return this.http.post<any>(`${API_URL}/authenticate`, {
      username,
      password
    }) 
          .pipe(
            map(
              data => {
                sessionStorage.setItem(AUTHENTICATED_USER,username);
                sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
                return data;
              }
            )
          );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser)
    return sessionStorage.getItem(TOKEN);
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
