import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustomPipeDemo'
})
export class MycustomPipeDemoPipe implements PipeTransform {

  transform(value: number ): any {
    return null;
  }

}
