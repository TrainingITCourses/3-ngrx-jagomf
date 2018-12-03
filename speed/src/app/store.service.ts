import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { storeReducer } from './store.reducer';
import { Action, ACTIONS } from './store.actions';

@Injectable({ providedIn: 'root' })
export class StoreService {

  private state = { ...initialState };
  private agencies$: BehaviorSubject<any>;
  private types$: BehaviorSubject<any>;
  private statuses$: BehaviorSubject<any>;
  private missions$: BehaviorSubject<any>;

  constructor() {
    this.agencies$ = new BehaviorSubject(this.state.agencies);
    this.types$ = new BehaviorSubject(this.state.types);
    this.statuses$ = new BehaviorSubject(this.state.statuses);
    this.missions$ = new BehaviorSubject(this.state.missions);
  }

  select$(slice: SLICES) {
    switch (slice) {
      case SLICES.agencies:
        return this.agencies$.asObservable();
      case SLICES.types:
        return this.types$.asObservable();
      case SLICES.statuses:
        return this.statuses$.asObservable();
      case SLICES.missions:
        return this.missions$.asObservable();
    }
  }

  selectSnapshot(slice: SLICES) {
    switch (slice) {
      case SLICES.agencies:
        return [ ...this.state.agencies ];
      case SLICES.types:
        return [ ...this.state.types ];
      case SLICES.statuses:
        return [ ...this.state.statuses ];
      case SLICES.missions:
        return [ ...this.state.missions ];
    }
  }

  dispatch(action: Action) {
    this.state = storeReducer(this.state, action);
    switch (action.type) {
      case ACTIONS.loadAgencies:
        this.agencies$.next([...this.state.agencies]);
        break;
      case ACTIONS.loadMissions:
        this.missions$.next([...this.state.missions]);
        break;
      case ACTIONS.loadStatuses:
        this.statuses$.next([...this.state.statuses]);
        break;
      case ACTIONS.loadTypes:
        this.types$.next([...this.state.types]);
        break;
    }
  }
}

export enum SLICES {
  agencies = 'agencies',
  types = 'types',
  statuses = 'statuses',
  missions = 'missions'
}

export const initialState = {
  agencies: [],
  types: [],
  statuses: [],
  missions: []
};
