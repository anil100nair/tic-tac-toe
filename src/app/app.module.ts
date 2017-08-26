import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule
   ],
  declarations: [ AppComponent,
                  BoardComponent,
                  SquareComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
