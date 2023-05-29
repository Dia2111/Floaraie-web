import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aranjament1Component } from './aranjament1.component';

describe('Aranjament1Component', () => {
  let component: Aranjament1Component;
  let fixture: ComponentFixture<Aranjament1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aranjament1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aranjament1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
