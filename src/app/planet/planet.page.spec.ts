import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetPage } from './planet.page';

describe('PlanetPage', () => {
  let component: PlanetPage;
  let fixture: ComponentFixture<PlanetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
