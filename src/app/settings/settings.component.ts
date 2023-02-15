import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private router: Router) { }

  backToProfile() {
    this.router.navigate(['/myprofile']);
  }


  isSettingsRoute() {
    return this.router.url === '/settings';
  }

  distanceValue = 160
  ageRange = 5
}
