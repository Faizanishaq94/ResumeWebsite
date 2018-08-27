import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttons = [true, false]; //new
  currentSlideNum = 1;
  maxSlideNum = 11;
  currentSlideShowPhoto : string = '../assets/loyalty' + this.currentSlideNum + '.PNG';
  relatedCourses : string[] = ["Intro Computer Programming [Python] ","Software Design [Java]","Object Oriented Programming [Java]",
  "Program Design/Data Structures [Java]","Applied Programming [PHP]","Database Fundamentals [SQL]","Multimedia & Web Design [HTML/CSS]",
  "System Analysis and Design","IT Architecture Fundamentals","Discrete Structures"];//new

 
  // getRoute(route : string) {
  //   let value : string = "/";
  //   for(let i of value.split(" ")) {
  //     value += i.toLowerCase() + "-";
  //   }
  //   return value.substring(0, value.length - 1);
  // }

  openTab(num : number) {
    this.buttons = [false,false];
    this.buttons[num] = true;
  }

  changeCurrent(num : number) {
    let photoLink = "../assets/loyalty";
    if (num == -1) {
      photoLink += this.currentSlideNum == 1 ? this.maxSlideNum : --this.currentSlideNum;
    }
    else {
      photoLink += this.currentSlideNum == this.maxSlideNum ? '1' : ++this.currentSlideNum;
    }
    this.currentSlideShowPhoto = photoLink + '.PNG';
  }
}
