import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'totalTimeFormat'})
export class totalTimeFormat implements PipeTransform {
  transform(value: number): string {      
    let hour =  Math.floor(value/60);
    var newStr = hour + ":" + value%60;
    return newStr;
  }
}