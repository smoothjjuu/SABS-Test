import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'dateFormat'})
export class dateFormat implements PipeTransform {
  transform(value: string): string {
    var newStr = value.substr(0,2) + "/" + value.substr(2,2)+ "/" + value.substr(4);
    return newStr;
  }
}