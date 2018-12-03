import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsViewerComponent } from './missions-viewer.component';

describe('MissionsViewerComponent', () => {
  let component: MissionsViewerComponent;
  let fixture: ComponentFixture<MissionsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
