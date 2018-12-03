import { initialState } from './store.service';
import { ACTIONS, Action } from './store.actions';

export function storeReducer(state = initialState, action: Action) {
  const result = { ...state };
  switch (action.type) {
    case ACTIONS.loadAgencies:
      result.agencies = action.payload;
      break;
    case ACTIONS.loadMissions:
      result.missions = action.payload;
      break;
    case ACTIONS.loadStatuses:
      result.statuses = action.payload;
      break;
    case ACTIONS.loadTypes:
      result.types = action.payload;
      break;
  }
  return result;
}
