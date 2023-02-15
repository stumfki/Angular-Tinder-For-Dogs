import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  name: string = "Thunder"
  age: string = "13"
  inputName: string = ""
  inputAge: string = ""
  editInfo: boolean = false
  editPicture: boolean = false
  constructor(private router: Router) {
   
  }


  
  isMyProfileRoute() {
    return this.router.url === '/myprofile';
  }

  goToTinDogPlus() {
    this.router.navigate(['/tindogplus']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }


  changeName() {
   this.editInfo = !this.editInfo
  }

  changePicture() {
    this.editPicture = !this.editPicture
   }

  confirmNameChange() {
    if(this.inputName.length && this.age.length) {
      this.name = this.inputName
      this.inputName = ""
      this.age = this.inputAge
      this.inputAge = ""
      this.editInfo = !this.editInfo
    } else if(this.inputName.length) {
      this.name = this.inputName
      this.inputName = ""
      this.editInfo = !this.editInfo
    }
    else if(isNaN(Number(this.inputAge)) && this.inputAge.length || Number(this.inputAge) === 0) {
      alert("Age must be a number and greater than 0")
    }
    else if(this.age.length) { 
      
   this.age = this.inputAge
   this.editInfo = !this.editInfo
    }

  
    }
  



}

