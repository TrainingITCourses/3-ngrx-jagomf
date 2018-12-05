import { Action } from '@ngrx/store';

export enum TypeActionTypes {
  LoadTypes = '[Type] Load Types',
  TypesLoaded = '[Type] Types Loaded'
}

export class LoadTypes implements Action {
  readonly type = TypeActionTypes.LoadTypes;
}

export class TypesLoaded implements Action {
  readonly type = TypeActionTypes.TypesLoaded;
  constructor(readonly payload: any[]) {}
}

export type TypeActions = LoadTypes | TypesLoaded;
