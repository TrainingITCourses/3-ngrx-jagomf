import { Action } from '@ngrx/store';
import { Mission } from '../models/mission';


export interface State {
  missions: Mission[];
}

export const initialState: State = {
  missions: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
