import { Action } from '@ngrx/store';


export interface State {
  types: any[];
}

export const initialState: State = {
  types: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
