import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationBean } from 'src/models/authenticateBean';



@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldService() {
    return this.http.get<AuthenticationBean>('http://localhost:8080/hello-world');
  }

  executeHelloWorldServiceWithPath(name) {
    return this.http.get<AuthenticationBean>(`http://localhost:8080/hello-world/${name}`) 
  }
}
