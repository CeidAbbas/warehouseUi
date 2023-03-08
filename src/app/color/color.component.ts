import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  template: `
    <p>
      color works!
    </p>
  `,
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
