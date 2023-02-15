import { Component, OnInit } from '@angular/core';
import { WindowRefService } from './window-ref.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tinderfordogs';

  window: any;

  constructor(private WindowRefService: WindowRefService, private router: Router) {}

  ngOnInit() {
    this.window = this.WindowRefService.nativeWindow;
  }
  
  goToMessages(id: string) {
    this.router.navigate(['/messages', id]);
   
  }
  names = [{
    name: 'Chrisy',
    matched: 'Jan 12'
  },
  {
    name: 'Thomas',
    matched: 'Feb 3'
  },
  {
    name: 'John',
    matched: 'April 2'
  }]
}
