import { Mission } from '../../models/mission';
import { MissionActions, MissionActionTypes } from './mission.actions';


export interface State {
  missions: Mission[];
}

export const initialState: State = {
  missions: []
};

export function reducer(state = initialState, action: MissionActions): State {
  switch (action.type) {
    case MissionActionTypes.LoadMissions:
      return state;
    case MissionActionTypes.MissionsLoaded:
      return { missions: action.payload };
    default:
      return state;
  }
}
