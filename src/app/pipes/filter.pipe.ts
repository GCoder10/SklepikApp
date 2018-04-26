import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(workers: any, termSurname: any): any {

    // tslint:disable-next-line:curly
    if (termSurname === undefined) return workers;

    return workers.filter(function(worker) {
        return worker.surname.toLowerCase().includes(termSurname.toLowerCase());
    });

  }

}
