import { Component, OnInit } from '@angular/core';
import { ProviderService } from './provider.service';
import { Observable } from 'rxjs';
import { StoreService, SLICES } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private store: StoreService,
    private provider: ProviderService
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
    this.provider.getMissions();
  }

  loadValues() {
    this.store.select$(SLICES.missions).subscribe(missions => {
      this.missions = [ ...missions ];
      this.valuesHolder = this.missions;
    });
    this.store.select$(SLICES.agencies).subscribe(agencies => {
      this.agencies = [ ...agencies ];
      this.valuesHolder = this.agencies;
    });
    this.store.select$(SLICES.statuses).subscribe(statuses => {
      this.statuses = [ ...statuses ];
      this.valuesHolder = this.statuses;
    });
    this.store.select$(SLICES.types).subscribe(types => {
      this.types = [ ...types ];
      this.valuesHolder = this.types;
    });
  }

  setCriteria(criteria) {
    switch (criteria) {
      case 'status':
        this.provider.getStatuses();
        break;
      case 'agency':
        this.provider.getAgencies();
        break;
      case 'type':
        this.provider.getTypes();
        break;
    }
    this.criteria = criteria;
  }

  setValue(value) {
    this.value = { ...value };
  }
}
