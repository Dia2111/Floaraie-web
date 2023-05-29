import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aranjament8Component } from './aranjament8.component';

describe('Aranjament8Component', () => {
  let component: Aranjament8Component;
  let fixture: ComponentFixture<Aranjament8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aranjament8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aranjament8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
