import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMoviePage } from './modal-movie.page';

describe('ModalMoviePage', () => {
  let component: ModalMoviePage;
  let fixture: ComponentFixture<ModalMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
