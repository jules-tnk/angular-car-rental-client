import {Payment} from "./payment";

export interface RentalRequest {
  userEmail: string,
  carDescriptionId: string,
  isWithDriver: boolean,
  startDate: string,
  endDate: string
}
