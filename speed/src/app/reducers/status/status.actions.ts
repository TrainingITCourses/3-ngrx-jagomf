import { Action } from '@ngrx/store';

export enum StatusActionTypes {
  LoadStatuss = '[Status] Load Statuses',
  StatusesLoaded = '[Status] Statuses Loaded'
}

export class LoadStatuss implements Action {
  readonly type = StatusActionTypes.LoadStatuss;
}

export class StatusesLoaded implements Action {
  readonly type = StatusActionTypes.StatusesLoaded;
  constructor(readonly payload: any[]) {}
}

export type StatusActions = LoadStatuss | StatusesLoaded;
