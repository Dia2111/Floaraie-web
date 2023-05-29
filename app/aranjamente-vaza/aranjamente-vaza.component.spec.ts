import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AranjamenteVazaComponent } from './aranjamente-vaza.component';

describe('AranjamenteVazaComponent', () => {
  let component: AranjamenteVazaComponent;
  let fixture: ComponentFixture<AranjamenteVazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AranjamenteVazaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AranjamenteVazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
