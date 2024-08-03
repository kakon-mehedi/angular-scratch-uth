import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'addRemoveText',
    standalone: true
    
})
export class AddRemoveTextPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        // here args is a rest paramter syntax
        // all of the arguments passed inside this parameter 
        // will be stored inside args variable as an array
        
        // The the current text value 
        console.log(value); // Sir Kakon Mehedi

        // See the passed argument list 
        console.log(args); // ['mr', 'sir']

       const [textShouldAdd, textShouldRemove] = args;

       const removedString = removeTextFromString(value, textShouldRemove);

       const outputString = addTextToTheString(removedString, textShouldAdd);
    
       return outputString;

    }
}

function removeTextFromString(orginalStr: string, rmvStr: string, ): string {
    // Logic
    return orginalStr.replace(rmvStr, '')
}

function addTextToTheString(orginalStr: string, addStr: string): string {
    // Logic
    return addStr + ' ' + orginalStr
}