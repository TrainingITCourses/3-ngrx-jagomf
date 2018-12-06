import { Agency } from '../../models/agency';
import { AgencyActions, AgencyActionTypes } from './agency.actions';


export interface State {
  agencies: Agency[];
}

export const initialState: State = {
  agencies: []
};

export function reducer(state = initialState, action: AgencyActions): State {
  switch (action.type) {
    case AgencyActionTypes.LoadAgencys:
      return state;
    case AgencyActionTypes.AgenciesLoaded:
      return { agencies: action.payload };
    default:
      return state;
  }
}
