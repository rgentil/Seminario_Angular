import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeHomeComponent } from './bike-home.component';

describe('BikeHomeComponent', () => {
  let component: BikeHomeComponent;
  let fixture: ComponentFixture<BikeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
