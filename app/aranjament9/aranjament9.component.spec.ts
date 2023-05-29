import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aranjament9Component } from './aranjament9.component';

describe('Aranjament9Component', () => {
  let component: Aranjament9Component;
  let fixture: ComponentFixture<Aranjament9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aranjament9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aranjament9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
