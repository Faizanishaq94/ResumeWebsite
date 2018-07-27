import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav-button',
  templateUrl: './side-nav-button.component.html',
  styleUrls: ['./side-nav-button.component.css']
})
export class SideNavButtonComponent implements OnInit {
  @Input() name : string;
  icons = {
    "About Me" : "account_circle",
    "Experience" : "category",
    "Education" : "school",
    "My Skills" : "assignment",
    "Contact" : "alternate_email"
  };

  constructor() { }

  ngOnInit() {
  }

}
