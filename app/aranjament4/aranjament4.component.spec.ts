import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aranjament4Component } from './aranjament4.component';

describe('Aranjament4Component', () => {
  let component: Aranjament4Component;
  let fixture: ComponentFixture<Aranjament4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aranjament4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aranjament4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
