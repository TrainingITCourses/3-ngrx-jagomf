import { Action } from '@ngrx/store';
import { Agency } from '../models/agency';


export interface State {
  agencies: Agency[];
}

export const initialState: State = {
  agencies: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
