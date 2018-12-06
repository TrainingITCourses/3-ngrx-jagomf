import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AgencyActionTypes, AgenciesLoaded } from './agency.actions';
import { mergeMap, map } from 'rxjs/operators';
import { ProviderService } from '../../provider.service';


@Injectable()
export class AgencyEffects {
  @Effect()
  load$ = this.actions$.ofType(AgencyActionTypes.LoadAgencys).pipe(
    mergeMap(() => this.provider.getAgencies()),
    map(agencies => new AgenciesLoaded(agencies))
  );

  constructor(private actions$: Actions, private provider: ProviderService) {}
}
