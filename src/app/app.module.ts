import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FilterPocComponent } from './filter-poc/filter-poc.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SmartTableModule ],
  declarations: [ AppComponent, HelloComponent, FilterPocComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
