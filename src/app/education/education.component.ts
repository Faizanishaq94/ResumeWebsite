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
  constructor() { }

  ngOnInit() {
  }

  openTab(num : number) {
    if(num == 0) {
      this.buttons[0] = true;
      this.buttons[1] = false;
      return;
    }
    this.buttons[0] = false;
    this.buttons[1] = true;
  }

  gmuTabClick(num : number) {
    if(num == 0) {
      this.gmuTabs[0] = true;
      this.gmuTabs[1] = false;
      return;
    }
    this.gmuTabs[0] = false;
    this.gmuTabs[1] = true;
  }

  getColor(num : number) {
    if (this.gmuTabs[num]) {
      return 'rgb(221,221,221)';
    }
  }
}
