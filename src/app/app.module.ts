import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponents } from './courses.components';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponents
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
