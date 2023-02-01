import {Injectable} from '@angular/core';
import {CarDescription} from "../../model/carDescription";
import {AuthenticationService} from "../authentication/authentication.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentalRequest} from "../../model/api-request/rentalRequest";
import {API_PARAM} from "../../model/constants";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private authService: AuthenticationService,
              private http: HttpClient) {
  }

  sendCarRentalRequest(carDescription: CarDescription,
                       isWithDriver: boolean,
                       startDateStr: string,
                       endDateStr: string): Observable<HttpResponse<any>> {
    let rentalRequestUrl = API_PARAM.BASE_URL + API_PARAM.RENTAL_REQUEST_PATH;
    window.alert("Request path "+rentalRequestUrl)

    let newRentalRequest: RentalRequest = {
      carDescriptionId: carDescription.id,
      isWithDriver: isWithDriver,
      startDateString: startDateStr,
      endDateString: endDateStr
    }

    window.alert(`Request : ${JSON.stringify(newRentalRequest)}`);

    return this.http.post(rentalRequestUrl, newRentalRequest, {observe: 'response'});
  }

}
