import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeCartComponent } from './bike-cart.component';

describe('BikeCartComponent', () => {
  let component: BikeCartComponent;
  let fixture: ComponentFixture<BikeCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
