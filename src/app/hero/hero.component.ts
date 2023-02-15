import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  dogsSwiped: string[];

  constructor(private http: HttpClient, private router: Router) {
    this.dogsSwiped = [];
  }

  isHeroRoute() {
    return this.router.url === '/home';
  }

  currentDog: string = ""
  currentDogAge: number = 0
  currentDogName: string = ""
  currentDogQuote: string = ""
  
  fetchImage() {
    this.http.get<{message: string}>('https://dog.ceo/api/breeds/image/random').subscribe(data => {
      console.log(data);
      this.currentDog = data.message;

    });
  }

  getDog() {
    this.currentDogAge = this.getRandomAge();
    this.fetchImage()
    this.http.get<{results: any[]}>('https://randomuser.me/api/').subscribe(data => {
      console.log(data.results[0].name.first);

      this.currentDogName = data.results[0].name.first
    });
    

    this.http.get<{content: string}>('https://api.quotable.io/random?maxLength=50').subscribe(data => {
      console.log(data.content);
      this.currentDogQuote = data.content

     
    });
  }

  ngOnInit() {
    this.getDog()
  }


  getRandomAge():number {
    return Math.floor(Math.random() * 20) + 1;

  }
  
  liked: boolean = false
  swiped: boolean = false
  disliked: boolean = false
  like() {
    this.swiped = true
    this.liked = true
    setTimeout(() => {
      this.swiped = false
      this.liked = false
      this.getDog()
    }, 1500)
   
  }

  dislike() {
    this.swiped = true
    this.disliked = true
    setTimeout(() => {
      this.swiped = false
      this.disliked = false
      this.getDog()
    }, 1500)
  }


}
