import { TypeActions, TypeActionTypes } from './type.actions';


export interface State {
  types: any[];
}

export const initialState: State = {
  types: []
};

export function reducer(state = initialState, action: TypeActions): State {
  switch (action.type) {
    case TypeActionTypes.LoadTypes:
      return state;
    case TypeActionTypes.TypesLoaded:
      return { types: action.payload };
    default:
      return state;
  }
}
