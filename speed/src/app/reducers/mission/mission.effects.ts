import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { MissionActionTypes, MissionsLoaded } from './mission.actions';
import { ProviderService } from '../../provider.service';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class MissionEffects {
  @Effect()
  load$ = this.actions$.ofType(MissionActionTypes.LoadMissions).pipe(
    mergeMap(() => this.provider.getMissions()),
    map(missions => new MissionsLoaded(missions))
  );

  constructor(private actions$: Actions, private provider: ProviderService) {}
}
