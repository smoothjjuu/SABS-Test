import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'timeFormat'})
export class timeFormat implements PipeTransform {
  transform(value: string): string {
    var newStr = value.substr(0,2) + ":" + value.substr(2);
    return newStr;
  }
}