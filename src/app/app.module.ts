import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  BoardComponent,
                  SquareComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
