import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ProviderService } from '../../provider.service';
import { TypeActionTypes, TypesLoaded } from './type.actions';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class TypeEffects {
  @Effect()
  load$ = this.actions$.ofType(TypeActionTypes.LoadTypes).pipe(
    mergeMap(() => this.provider.getTypes()),
    map(types => new TypesLoaded(types))
  );

  constructor(private actions$: Actions, private provider: ProviderService) {}
}
