import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePage } from './vehicle.page';

describe('VehiclePage', () => {
  let component: VehiclePage;
  let fixture: ComponentFixture<VehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
