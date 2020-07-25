import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContentComponent } from "./content/content.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, ContentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
