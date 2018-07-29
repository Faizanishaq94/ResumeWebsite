import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-non-major-exp',
  templateUrl: './non-major-exp.component.html',
  styleUrls: ['./non-major-exp.component.css']
})
export class NonMajorExpComponent implements OnInit {
  @Input() position : string;
  @Input() timeFrame : string;
  @Input() company : string;
  constructor() { }

  ngOnInit() {
  }

}
