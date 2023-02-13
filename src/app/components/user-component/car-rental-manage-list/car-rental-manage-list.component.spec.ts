import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalManageListComponent } from './car-rental-manage-list.component';

describe('CarRentalManageListComponent', () => {
  let component: CarRentalManageListComponent;
  let fixture: ComponentFixture<CarRentalManageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRentalManageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalManageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
