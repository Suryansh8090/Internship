import { Component } from '@angular/core';
declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor() { }

  initiatePayment() {
    var options = {
      "key": "your_razorpay_key", // Replace with your Razorpay key
      "amount": 50000, // Payment amount in paise (₹500)
      "currency": "INR",
      "name": "Pet Purchase",
      "description": "Purchase Pet",
      "image": "https://example.com/logo.png",
      "handler": function (response: any) {
        alert("Payment successful!");
      },
      "prefill": {
        "name": "Customer Name",
        "email": "customer@example.com",
        "contact": "9999999999"
      },
      "theme": {
        "color": "#F37254"
      }
    };
    var rzp = new Razorpay(options);
    rzp.open();
  }
}
