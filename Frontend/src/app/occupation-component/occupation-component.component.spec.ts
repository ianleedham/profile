import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationComponentComponent } from './occupation-component.component';

describe('OccupationComponentComponent', () => {
  let component: OccupationComponentComponent;
  let fixture: ComponentFixture<OccupationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
