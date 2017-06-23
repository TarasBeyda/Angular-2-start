import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }                from '@angular/http';

import { AppComponentStart }        from './app.component';
import { UserComponent }            from './user.component';
import { AboutComponent }           from './about.component';

import { routing }                  from './app.routing';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, routing ],

    declarations: [
                    AppComponentStart,
                    UserComponent,
                    AboutComponent
                  ],

    bootstrap:    [ AppComponentStart ]
})
export class AppModule { }