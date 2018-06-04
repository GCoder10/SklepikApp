import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCity'
})
export class FilterCityPipe implements PipeTransform {

  transform(workers: any, termCity: any): any {

    // tslint:disable-next-line:curly
    if (termCity === undefined) return workers;

    return workers.filter(function(worker) {
        return worker.city.toLowerCase().includes(termCity.toLowerCase());
    });

  }

}
