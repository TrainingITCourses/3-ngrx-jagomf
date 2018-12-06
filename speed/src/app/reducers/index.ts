import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromMission from './mission/mission.reducer';
import * as fromType from './type/type.reducer';
import * as fromStatus from './status/status.reducer';
import * as fromAgency from './agency/agency.reducer';

export interface State {

  mission: fromMission.State;
  type: fromType.State;
  status: fromStatus.State;
  agency: fromAgency.State;
}

export const reducers: ActionReducerMap<State> = {

  mission: fromMission.reducer,
  type: fromType.reducer,
  status: fromStatus.reducer,
  agency: fromAgency.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
