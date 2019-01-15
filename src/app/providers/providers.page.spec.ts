import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersPage } from './providers.page';

describe('ProvidersPage', () => {
  let component: ProvidersPage;
  let fixture: ComponentFixture<ProvidersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
