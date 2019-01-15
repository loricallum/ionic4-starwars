import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalItemsPage } from './modal-items.page';

describe('ModalItemsPage', () => {
  let component: ModalItemsPage;
  let fixture: ComponentFixture<ModalItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
