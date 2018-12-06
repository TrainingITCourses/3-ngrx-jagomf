import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ProviderService } from '../../provider.service';
import { StatusActionTypes, StatusesLoaded } from './status.actions';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class StatusEffects {
  @Effect()
  load$ = this.actions$.ofType(StatusActionTypes.LoadStatuss).pipe(
    mergeMap(() => this.provider.getStatuses()),
    map(statuses => new StatusesLoaded(statuses))
  );

  constructor(private actions$: Actions, private provider: ProviderService) {}
}
