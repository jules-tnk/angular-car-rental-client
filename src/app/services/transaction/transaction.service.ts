import {Injectable} from '@angular/core';
import {CarDescription} from "../../model/carDescription";
import {AuthenticationService} from "../authentication/authentication.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private authService: AuthenticationService,
              private http: HttpClient) {
  }

  sendTransactionRequest(carDescription: CarDescription, isWithDriver: boolean, startDateStr: string, endDateStr: string) {
    let userEmail: string = this.authService.getUserEmail();

    let newRentalRequest = {
      userEmail: userEmail,
      carDescriptionId: carDescription.id,
      isWithDriver: isWithDriver,
      startDateStr: startDateStr,
      endDateStr: endDateStr
    }

    window.alert(JSON.stringify(newRentalRequest));

    //send new rental request to backend
    //redirect to result page component
  }

}
