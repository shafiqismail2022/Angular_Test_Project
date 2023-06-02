import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponents } from './courses.components';
import { courseService } from './course.service';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponents,
    SummaryPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    courseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
