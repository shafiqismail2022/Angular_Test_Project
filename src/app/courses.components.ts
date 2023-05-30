import { Component } from "@angular/core";
import { courseService } from "./course.service";
@Component({
    selector:'angular',
    template:`<h2>{{getTitle()}}</h2>
    <!-- <ul>
    <li *ngFor="let course of courses">{{ course }}</li> // Dom manipulation
    </ul> -->
    <!-- <img src="{{imgUrl}}" alt=""> // String Interpolation is used for text-->
    <img [src]="imgUrl" alt="People Laughing">   <!-- attribute(property) binding -->

    <!-- <table>
        <tr><td [attr.colspan]="colspan"></td></tr> // attribute Not essentail to be Dom element 
    </table> -->
    <div (click)='onClickDiv($event)'>
        <button (click)='onClick($event)'class="btn btn-primary"[class.active]='isActive'>Save</button></div> <!---class binding with attribute- and event binding with $event Object-->
    <!-- <button [style.backgroundColor]="isActive?'blue':'black'"></button> // Style Binding -->
    <input (keyup.enter)='onKeyUp()'type="text">
    `
 
})
export class CourseComponents{
    onKeyUp():void{
        // if($event.keyCode===13){
            console.log("Enter was pressed")
        // }
    }
    onClickDiv($event:any):void{
        console.log("Div was also clicked")
    }
    onClick($event:any):void{
        $event.stopPropagation();
        console.log("A Button was Clicked",$event)
    }
    isActive:boolean=true;
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