import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalManageDetailComponent } from './car-rental-manage-detail.component';

describe('CarRentalManageDetailComponent', () => {
  let component: CarRentalManageDetailComponent;
  let fixture: ComponentFixture<CarRentalManageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRentalManageDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalManageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
