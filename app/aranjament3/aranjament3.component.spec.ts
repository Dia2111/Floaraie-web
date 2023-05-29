import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aranjament3Component } from './aranjament3.component';

describe('Aranjament3Component', () => {
  let component: Aranjament3Component;
  let fixture: ComponentFixture<Aranjament3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aranjament3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aranjament3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
