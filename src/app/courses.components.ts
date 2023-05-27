import { Component } from "@angular/core";
@Component({
    selector:'angular',
    template:`<h2>{{getTitle()}}</h2>
    <ul>
    <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    `

})
export class CourseComponents{
title:String='Hellow every one';
courses:String[]=['Physics','Chemistry','Mathamatics'];
getTitle():string {
return "This is just a test";    
}
}