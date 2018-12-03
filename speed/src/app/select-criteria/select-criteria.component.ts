import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-criteria',
  templateUrl: './select-criteria.component.html',
  styleUrls: ['./select-criteria.component.css']
})
export class SelectCriteriaComponent {

  @Output() changedCriteria: EventEmitter<string>;

  constructor() {
    this.changedCriteria = new EventEmitter();
  }

  setCriteria(criteria: string) {
    this.changedCriteria.emit(criteria);
  }

}
