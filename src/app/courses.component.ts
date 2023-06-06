import { Component, OnInit, Input } from "@angular/core";
import { courseService } from "./course.service";
import { SummaryPipe } from "./summary.pipe";
@Component({
    selector:'angular',
    templateUrl: './courses.component.html'
//     template:`<h2>{{getTitle()}}</h2>
//     <!-- <ul>
//     <li *ngFor="let course of courses">{{ course }}</li> // Dom manipulation
//     </ul> -->
//     <!-- <img src="{{imgUrl}}" alt=""> // String Interpolation is used for text-->
//     <img [src]="imgUrl" alt="People Laughing">   <!-- attribute(property) binding -->

//     <!-- <table>
//         <tr><td [attr.colspan]="colspan"></td></tr> // attribute Not essentail to be Dom element 
//     </table> -->
//     <div (click)='onClickDiv($event)'>
//         <button (click)='onClick($event)'class="btn btn-primary"[class.active]='isActive'>Save</button></div> <!---class binding with attribute- and event binding with $event Object-->
//     <!-- <button [style.backgroundColor]="isActive?'blue':'black'"></button> // Style Binding -->
//     <!-- <input #email (keyup.enter)='onKeyUp(email.value)'type="text">   //template variable email-->
//     <input [(ngModel)]="email" (keyup.enter)='onKeyUp()' type="text"><br>  <!--Two way Binding using ngModel for capturing input-->
//    {{coUrse.title| uppercase|lowercase}} <br> <!-- case pipes-->
//    {{coUrse.rating|number:'2.1-3'}} <br> <!--number format with integer followed by min and max decimal-->
//    {{coUrse.students|number}} <br>
//    {{coUrse.price|currency:'AUD':'Tsh':'3.2-3'}} <br> 
//    {{coUrse.releaseDate|date:"mediumDate"}} <br>
//    {{text|summary:10}}

//       `,
})
export class CourseComponents implements OnInit{
    
    @Input('is-favorite') isFavorite: boolean=false;//Nick naming out input for use of another properties
onChange():void{
    this.isFavorite=!this.isFavorite;
}
    coUrse:any={
title:"The Complete Angular Course",
rating:"4.9745",
students:"30123",
price:"190.09",
releaseDate:new Date(2023,3,1)
    }
    text:string="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    email:string="shafiqy@hotmail.com"
    ngOnInit(): void {
        
    }
    onKeyUp():void{
        console.log(this.email)
    }
    // onKeyUp(email:any):void{

    //     // if($event.keyCode===13){
    //         console.log(email) //loging out input on console
    //     // }
    // }
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