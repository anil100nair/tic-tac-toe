import { Component, Input } from '@angular/core';

@Component({
  selector: 'square',
  template: `{{state}}`,
  styles: [`
        :host{
            width : 100px;
            height: 100px;
            border: 1px solid grey;
            font-size: 75px;
            text-align: center;
            padding: auto;
        }
`]
})
export class SquaresComponent  { 
    @Input() state: string;
 }
