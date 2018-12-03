import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-missions-viewer',
  templateUrl: './missions-viewer.component.html',
  styleUrls: ['./missions-viewer.component.css']
})
export class MissionsViewerComponent {

  @Input() sources: any[];
  @Input() criteria: string;
  @Input() value: any;

  get filteredMissions() {
    return Array.isArray(this.sources) && this.value && this.sources.filter(mission => {
      switch (this.criteria) {
        case 'agency':
          return mission && mission.missions && mission.missions.length
            && mission.missions[0] && mission.missions[0].agencies
            && mission.missions[0].agencies.length
            && mission.missions[0].agencies[0].id === +this.value.id;
        case 'status':
          return mission && mission.status === +this.value.id;
        case 'type':
          return mission && mission.missions && mission.missions.length
            && mission.missions[0] && mission.missions[0].type === +this.value.id;
      }
    });
  }

}
