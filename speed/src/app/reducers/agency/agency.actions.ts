import { Action } from '@ngrx/store';

export enum AgencyActionTypes {
  LoadAgencys = '[Agency] Load Agencies',
  AgenciesLoaded = '[Agency] Agencies Loaded'
}

export class LoadAgencys implements Action {
  readonly type = AgencyActionTypes.LoadAgencys;
}

export class AgenciesLoaded implements Action {
  readonly type = AgencyActionTypes.AgenciesLoaded;
  constructor(readonly payload: any[]) {}
}

export type AgencyActions = LoadAgencys | AgenciesLoaded;
