import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aranjament6Component } from './aranjament6.component';

describe('Aranjament6Component', () => {
  let component: Aranjament6Component;
  let fixture: ComponentFixture<Aranjament6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aranjament6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aranjament6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
