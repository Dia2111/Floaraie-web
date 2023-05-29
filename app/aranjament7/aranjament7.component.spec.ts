import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aranjament7Component } from './aranjament7.component';

describe('Aranjament7Component', () => {
  let component: Aranjament7Component;
  let fixture: ComponentFixture<Aranjament7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aranjament7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aranjament7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
