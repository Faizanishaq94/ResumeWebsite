import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  invalid : boolean = false;
  emailInvalid : boolean = false;
  success : boolean = false;
  from : string = "";
  subject : string = "";
  content : string = "";
  errorMessages : string[];

  constructor() { }

  ngOnInit() { }


  

  checkSubmissionValidity() {
    this.success ? this.success = !this.success : '';
    this.emailInvalid = false;
    this.invalid = false;
    if(this.from == "" || this.content == "") {
      this.invalid = true;
      this.from == "" && this.content == "" ? this.errorMessages = ['1','2'] : 
      this.from == "" ? this.errorMessages = ['Sender Information'] :  this.errorMessages = ['Email Contents'];
      return;
    }
    if(this.checkEmailFormat()) {
      this.success = true;
      return;
    }
    this.invalid = true;
    this.emailInvalid = true;
    this.errorMessages = [];
  }

  checkEmailFormat() : boolean {
    let email = this.from;
    if(email.indexOf('@') == email.lastIndexOf('@') && email.substring(0,email.indexOf('@')).length >= 3 
    && email.lastIndexOf('.') > email.indexOf('@') && email.substring(email.lastIndexOf('.') + 1, email.length).length >=2) {
      return true;
    }
    return false;
  }


  zeroAll() {
    this.content = "";
    this.subject = "";
    this.from = "";
    this.invalid = false;
    this.emailInvalid = false;
    this.success = false;
  }

}
