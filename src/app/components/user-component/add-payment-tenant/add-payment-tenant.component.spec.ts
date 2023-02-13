import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentTenantComponent } from './add-payment-tenant.component';

describe('AddPaymentTenantComponent', () => {
  let component: AddPaymentTenantComponent;
  let fixture: ComponentFixture<AddPaymentTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentTenantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
