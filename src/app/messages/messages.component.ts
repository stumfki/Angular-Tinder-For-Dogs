import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { WindowRefService } from '../window-ref.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private WindowRefService: WindowRefService,) {}
  window: any;




  dog: string
  @ViewChild('content', { static: false }) content: ElementRef;
  ngOnInit() {
    this.window = this.WindowRefService.nativeWindow;
    this.activatedRoute.params.subscribe(params => {
      console.log('params: ', params);
      console.log(params['data']);
      this.dog = params['data'];
      console.log(this.dog);
    });
  }
  
  isMessagesRoute() {
    return this.router.url.startsWith('/messages');
}

backToMessages() {
  this.router.navigate(['/chat']);
}

backToMain() {
  this.router.navigate(['/home']);
}

ngAfterViewChecked() {
  this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
}

message: string;
messages = [];


addMessage(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    this.messages.push({text: this.message, person: this.dog});
    this.message = '';
  }
}

get filteredMessages() {
  return this.messages.filter(m => m.person === this.dog);
}

names = [{
  name: 'Chrisy',
  matched: 'Jan 12',
  id: "1"
},
{
  name: 'Thomas',
  matched: 'Feb 3',
  id: "2"
},
{
  name: 'John',
  matched: 'April 2',
  id: "3"
}]

}
