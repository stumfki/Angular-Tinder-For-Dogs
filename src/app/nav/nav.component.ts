import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRefService } from '../window-ref.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private WindowRefService: WindowRefService, private router: Router) {}
  window: any;
  ngOnInit() {
    this.window = this.WindowRefService.nativeWindow;
  }
  
  goToProfile() {
    this.router.navigate(['/myprofile']);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }

  goToMessages() {
    this.router.navigate(['/chat']);
  }
}
