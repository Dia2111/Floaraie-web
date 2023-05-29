import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AranjamenteCosComponent } from './aranjamente-cos.component';

describe('AranjamenteCosComponent', () => {
  let component: AranjamenteCosComponent;
  let fixture: ComponentFixture<AranjamenteCosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AranjamenteCosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AranjamenteCosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
