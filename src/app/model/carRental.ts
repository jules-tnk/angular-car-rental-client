import {Payment} from "./payment";

export interface CarRental{
  id: number;
  carModel: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  alreadyPaid: number;
  isPaymentCompleted: boolean;
  status: string;
  isWithDriver: boolean;
  tenantEmail: string;
  tenantPhoneNumber: string;
  driverEmail: string;
  driverPhoneNumber: string;
  payments: Payment[];
}
