import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Eduard Matei';
  password = '';
  errorMessage = "Invalid Input";
  invalidLogin = false;

  constructor(private router: Router, private authService: AuthentificationService) { }

  ngOnInit() {
  }

  handleLogin() {
   this.authService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true;
        }
      )
  }
}
