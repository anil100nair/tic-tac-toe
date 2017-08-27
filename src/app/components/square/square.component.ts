import { Component, Input } from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: [ './square.component.css' ]
})
export class SquareComponent  {
    @Input() state: string;
}