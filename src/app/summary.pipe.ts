import { Pipe, PipeDecorator, PipeTransform } from "@angular/core";
// import { pipe } from "rxjs";
@Pipe({
    name:'summary'
}
)
export class SummaryPipe implements PipeTransform{
    transform(value: String, limit:number, args?: any) {
        if(!value){
            return null;
        }
        let actualNo=limit?limit:50;
        return (value.substring(0,actualNo)+"...")
    }

}