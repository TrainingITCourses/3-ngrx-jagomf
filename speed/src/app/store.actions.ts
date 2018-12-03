export interface Action {
  readonly type: ACTIONS;
  readonly payload: any;
}

export enum ACTIONS {
  loadAgencies = 'loadAgencies',
  loadTypes = 'loadTypes',
  loadStatuses = 'loadStatuses',
  loadMissions = 'loadMissions'
}
