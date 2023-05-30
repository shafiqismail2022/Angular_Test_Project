import { Component } from "@angular/core";
import { courseService } from "./course.service";
@Component({
    selector:'angular',
    template:`<h2>{{getTitle()}}</h2>
    <!-- <ul>
    <li *ngFor="let course of courses">{{ course }}</li> // Dom manipulation
    </ul> -->
    <!-- <img src="{{imgUrl}}" alt=""> // String Interpolation is used for text-->
    <img [src]="imgUrl" alt="People Laughing">
    <!-- <table>
        <tr><td [attr.colspan]="colspan"></td></tr> // attribute Not essentail to be Dom element 
    </table> -->
    <button class="btn btn-primary">Save</button>
    `

})
export class CourseComponents{
    colspan:number=2;
title:String='Hellow every one';
imgUrl:String="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPcQULXbGZ6y7CkCDnIlP72ZVRVX8VQPBwGCFE3qtLz6RTehRX3IgqxVJ6HHHOsY7FWWo&usqp=CAU"
courses:String[]=[];
constructor(serv: courseService ){ //dependency
    // let serv = new courseService();
    this.courses=serv.getcourse()
}
getTitle():string {
return "This is just a test";    
}
}