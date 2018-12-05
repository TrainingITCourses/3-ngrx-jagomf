import { Action } from '@ngrx/store';
import { Status } from '../models/status';


export interface State {
  statuses: Status[];
}

export const initialState: State = {
  statuses: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
