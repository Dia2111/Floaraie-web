import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aranjament2Component } from './aranjament2.component';

describe('Aranjament2Component', () => {
  let component: Aranjament2Component;
  let fixture: ComponentFixture<Aranjament2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aranjament2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aranjament2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
