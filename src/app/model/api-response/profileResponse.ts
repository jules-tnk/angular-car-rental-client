import {CarRental} from "../carRental";

export interface ProfileResponse {
  carRentalHistory: CarRental[];
  missionHistory: CarRental[];
}
