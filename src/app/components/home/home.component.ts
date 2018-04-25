import { StorageService } from './../../services/storage/storage.service';
import { SecurityService } from './../../services/security/security.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router,
              private securityService: SecurityService,
              private storageService: StorageService
            ) { }

  ngOnInit(): void {
    this.getInitialToken();
  }
  /**
   * getInitialToken - This function gets the token to make further API calls.
   */
  getInitialToken(): void {
    if (!this.storageService.getSessionStorageItem('token')) {
      this.securityService.getToken().subscribe(result => {
        if (result && result.token) {
          this.storageService.saveSessionStorage('token', result.token);
        }
      }, err => {
        console.log(err);
      });
    }
  }
  /**
   * This function navigates to the Problem page
   */
  goToProblem(): void {
    this.route.navigateByUrl('/problem');
  }
  /**
   * This function navigates to the vehicles page
   */
  goToVehicles(): void {
    this.route.navigateByUrl('/vehicles');
  }
  /**
   * This function navigates to the planets page
   */
  goToPlanets(): void {
    this.route.navigateByUrl('/planets');
  }
  /**
   * This function fetches the token for the first time
   */
  getToken(): void {
    console.log('Token Initialized');
  }
}
