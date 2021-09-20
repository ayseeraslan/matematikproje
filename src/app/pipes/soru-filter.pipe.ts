import { Pipe, PipeTransform } from '@angular/core';
import { Soru } from '../models/soru';

@Pipe({
  name: 'soruFilter'
})
export class SoruFilterPipe implements PipeTransform {

  transform(sorular: Soru[], filterText:string): Soru[] {
    filterText=filterText.toLowerCase();

    console.log(filterText);
    console.log(sorular);

    return filterText? sorular.filter((s:Soru)=>
       s.title.toLowerCase().indexOf(filterText)!==-1): sorular; 
       }

}
