import { Component, OnInit } from '@angular/core';
// import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  buttons : boolean[] = [true,false];
  gmuTabs : boolean[] = [true,false];
  otherTabs : boolean[] = [true,false];
  constructor() { }

  ngOnInit() {
  }

  openTab(num : number) {
    this.buttons = [false,false];
    this.buttons[num] = true;
  }

  tabClick(num : number, type : number) {
    if(type == 1) {
      this.gmuTabs = [false,false];
      this.gmuTabs[num] = true;
      return;
    } 
    this.otherTabs = [false,false];
    this.otherTabs[num] = true;
  }

  getColor(num : number) {
    if (this.gmuTabs[num]) {
      return 'rgb(221,221,221)';
    }
  }
}
