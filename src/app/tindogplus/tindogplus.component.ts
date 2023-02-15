import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tindogplus',
  templateUrl: './tindogplus.component.html',
  styleUrls: ['./tindogplus.component.css']
})
export class TindogplusComponent {
  payment: boolean = false
  paymentForm: FormGroup;

  ngOnInit() {
    this.paymentForm = new FormGroup({
      fullname: new FormControl(null, Validators.required),
      creditcard: new FormControl(null, Validators.required),
      expdate: new FormControl(null, Validators.required),
      cvv: new FormControl(null, Validators.required),
      zipcode: new FormControl(null, Validators.required)
    }) 
  }
  
  onSubmit() {
    console.log(this.paymentForm)
  }
  constructor(private router: Router) {}

  isTinDogPlusRoute() {
    return this.router.url === '/tindogplus';
  }

  backToHomePage() {
    this.router.navigate(['/home']);
  }

  handlePayment() {
    this.payment = !this.payment
  }

  options = [
    {duration: "12", price: "6.67"},
    {duration: "6", price: "10.00"},
    {duration: "1", price: "14.99"}
  ]

  selected: number = 1
  getIndexOfSelected(index: number) {
    console.log(index)
    this.selected = index
  }

}
