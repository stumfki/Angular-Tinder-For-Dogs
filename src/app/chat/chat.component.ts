import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRefService } from '../window-ref.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  window: any;

  constructor(private WindowRefService: WindowRefService, private router: Router) {}

  ngOnInit() {
    this.window = this.WindowRefService.nativeWindow;
  }
  goToMain() {
    this.router.navigate(['/home']);
  }
  
  dog = "dog"
  goToMessages(id: string) {
    this.router.navigate(['/messages', id]);
   
  }

  matches: number = 3
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
  
  isMessagesRoute() {
    return this.router.url === '/chat';
  }
  

  showChat = {};

  toggleChat(id: number) {
    this.showChat[id] = !this.showChat[id];
  }
}
