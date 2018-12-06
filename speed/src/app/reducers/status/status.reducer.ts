import { Status } from '../../models/status';
import { StatusActions, StatusActionTypes } from './status.actions';


export interface State {
  statuses: Status[];
}

export const initialState: State = {
  statuses: []
};

export function reducer(state = initialState, action: StatusActions): State {
  switch (action.type) {
    case StatusActionTypes.LoadStatuss:
      return state;
    case StatusActionTypes.StatusesLoaded:
      return { statuses: action.payload };
    default:
      return state;
  }
}
