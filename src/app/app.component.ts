import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options : string[] = ["About Me", "Experience", "Education", "My Skills", "Contact"];
  relations : string[] = ["/about-me", "/experience", "/education", "/my-skills", "/contact"];
  nav = {
    toggle : false
  }
 
  getRoute(route : string) {
    let value : string = "/";
    for(let i of value.split(" ")) {
      value += i.toLowerCase() + "-";
    }
    return value.substring(0, value.length - 1);
  }
}
