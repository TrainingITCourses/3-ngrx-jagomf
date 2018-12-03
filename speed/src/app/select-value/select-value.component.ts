import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-select-value',
  templateUrl: './select-value.component.html',
  styleUrls: ['./select-value.component.css']
})
export class SelectValueComponent {

  @Input() options: any[];
  @Output() valueChosen: EventEmitter<any>;
  option;

  constructor() {
    this.valueChosen = new EventEmitter();
  }

  chooseVal(option) {
    this.valueChosen.emit(option);
  }

}
