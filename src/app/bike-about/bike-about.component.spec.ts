import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeAboutComponent } from './bike-about.component';

describe('BikeAboutComponent', () => {
  let component: BikeAboutComponent;
  let fixture: ComponentFixture<BikeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
