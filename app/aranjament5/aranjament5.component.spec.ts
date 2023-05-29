import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aranjament5Component } from './aranjament5.component';

describe('Aranjament5Component', () => {
  let component: Aranjament5Component;
  let fixture: ComponentFixture<Aranjament5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aranjament5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aranjament5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
