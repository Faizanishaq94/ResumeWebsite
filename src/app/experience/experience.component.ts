import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  collapse : boolean[] = [true,false];
  @Input() label;
  constructor() { }

  ngOnInit() {
  }

}
