import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AranjamenteCutieComponent } from './aranjamente-cutie.component';

describe('AranjamenteCutieComponent', () => {
  let component: AranjamenteCutieComponent;
  let fixture: ComponentFixture<AranjamenteCutieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AranjamenteCutieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AranjamenteCutieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
