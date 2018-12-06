import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { LoadMissions } from './reducers/mission/mission.actions';
import { LoadAgencys } from './reducers/agency/agency.actions';
import { LoadStatuss } from './reducers/status/status.actions';
import { LoadTypes } from './reducers/type/type.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private globalStore: Store<State>
  ) {}

  missions: any[];
  agencies: any[];
  statuses: any[];
  types: any[];
  valuesHolder: any[];
  criteria;
  value;

  ngOnInit() {
    this.loadValues();
    this.observeValues();
  }

  loadValues() {
    this.globalStore.dispatch(new LoadAgencys());
    this.globalStore.dispatch(new LoadMissions());
    this.globalStore.dispatch(new LoadStatuss());
    this.globalStore.dispatch(new LoadTypes());
  }

  observeValues() {
    this.globalStore.select('mission').subscribe(({ missions }) => {
      this.missions = [ ...missions ];
    });
    this.globalStore.select('agency').subscribe(({ agencies }) => {
      this.agencies = [ ...agencies ];
    });
    this.globalStore.select('status').subscribe(({ statuses }) => {
      this.statuses = [ ...statuses ];
    });
    this.globalStore.select('type').subscribe(({ types }) => {
      this.types = [ ...types ];
    });
  }

  setCriteria(criteria) {
    switch (criteria) {
      case 'status':
        this.valuesHolder = [ ...this.statuses ];
        break;
      case 'agency':
        this.valuesHolder = [ ...this.agencies ];
        break;
      case 'type':
        this.valuesHolder = [ ...this.types ];
        break;
    }
    this.criteria = criteria;
  }

  setValue(value) {
    this.value = { ...value };
  }
}
