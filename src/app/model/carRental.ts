export interface CarRental{
  id: number;
  carModel: string;
  startDate: string;
  endDate: string;
  isPaymentCompleted: boolean;
  status: string;
  isWithDriver: boolean;
  tenantEmail: string;
  driverEmail: string;
}
