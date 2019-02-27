import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/welcome-data.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
  welcomeMessageFromService: string = '';

  constructor(private route: ActivatedRoute, private dataService: WelcomeDataService) { 

  }

  ngOnInit() {
   this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.dataService.executeHelloWorldServiceWithPath(this.name).subscribe( 
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
      );  
  }

  handleSuccesfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }
}
