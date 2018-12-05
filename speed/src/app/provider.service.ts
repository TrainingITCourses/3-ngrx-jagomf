import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StoreService } from './store.service';
import { ACTIONS } from './store.actions';
import { Agency } from './models/agency';
import { Status } from './models/status';
import { Launch } from './models/launch';

@Injectable({ providedIn: 'root' })
export class ProviderService {

  constructor(
    private store: StoreService,
    private http: HttpClient
  ) { }

  public getAgencies = () =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(map(({ agencies }: { agencies: Agency[] }) => agencies))
      // .subscribe(agencies => this.store.dispatch({ type: ACTIONS.loadAgencies, payload: agencies }))

  public getTypes = () =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))
      // .subscribe(types => this.store.dispatch({ type: ACTIONS.loadTypes, payload: types }))

  public getStatuses = () =>
    this.http
      .get(environment.url + '/assets/data/launchstatus.json')
      .pipe(map(({ types }: { types: Status[] }) => types))
      // .subscribe(statuses => this.store.dispatch({ type: ACTIONS.loadStatuses, payload: statuses }))

  public getMissions = () =>
    this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(map(({ launches }: { launches: Launch[] }) => launches))
      // .subscribe(launches => this.store.dispatch({ type: ACTIONS.loadMissions, payload: launches }))
}
