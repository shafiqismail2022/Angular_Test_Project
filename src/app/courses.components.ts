import { Component } from "@angular/core";
import { courseService } from "./course.service";
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
courses:String[]=[];
constructor(serv: courseService ){ //dependency
    // let serv = new courseService();
    this.courses=serv.getcourse()
}
getTitle():string {
return "This is just a test";    
}
}