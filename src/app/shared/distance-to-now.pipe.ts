import { Pipe, PipeTransform } from '@angular/core';
import * as parse from 'date-fns/parse';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

@Pipe({
  name: 'distanceToNow',
  // Caso este valor seja true (esse é o padrão), o pipe só aplicara alterações
  // caso o objeto inteiro seja alterado. Mesma regra do componentChangeDetection: onPush
  pure: false
})
export class DistanceToNowPipe implements PipeTransform {

  transform(value: number | string | Date, includeSeconds?: boolean): any {
    const args = { includeSeconds }
    return distanceInWordsToNow(parse(value), args);
  }

}
