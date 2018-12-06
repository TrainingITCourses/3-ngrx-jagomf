import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Agency } from './models/agency';
import { Status } from './models/status';
import { Launch } from './models/launch';

@Injectable({ providedIn: 'root' })
export class ProviderService {

  constructor(
    private http: HttpClient
  ) { }

  public getAgencies = () =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(map(({ agencies }: { agencies: Agency[] }) => agencies))

  public getTypes = () =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))

  public getStatuses = () =>
    this.http
      .get(environment.url + '/assets/data/launchstatus.json')
      .pipe(map(({ types }: { types: Status[] }) => types))

  public getMissions = () =>
    this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(map(({ launches }: { launches: Launch[] }) => launches))
}
