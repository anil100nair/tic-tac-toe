import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule
   ],
  declarations: [ AppComponent,
                  BoardComponent,
                  SquareComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
