import { Component } from "@angular/core";
@Component({
    selector:'angular',
    template:'<h2>{{getTitle()}}</h2>'

})
export class CourseComponents{
title:String='Hellow every one'
getTitle():string {
return "This is just a test"    
}
}