import {Injectable} from '@angular/core';
import {CarDescription} from "../../model/carDescription";
import {AuthenticationService} from "../authentication/authentication.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentalRequest} from "../../model/api-request/rentalRequest";
import {apiParam} from "../../model/constants";
import {CarRental} from "../../model/carRental";
import {Payment} from "../../model/payment";

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
    let rentalRequestUrl = apiParam.BASE_URL + apiParam.RENTAL_REQUEST_PATH;

    let newRentalRequest: RentalRequest = {
      carDescriptionId: carDescription.id,
      isWithDriver: isWithDriver,
      startDateString: startDateStr,
      endDateString: endDateStr
    }

    return this.http.post(rentalRequestUrl, newRentalRequest, {observe: 'response'});
  }


  cancelCarRental(carRentalId: number){
    let cancelUrl: string = apiParam.BASE_URL + apiParam.CANCEL_RENTAL_PATH + `/${carRentalId}`;
    return this.http.get(cancelUrl, {observe: 'response'})
  }

  getCarRental(carRentalId: number): Observable<CarRental>{
    let carRentalUrl = apiParam.BASE_URL + apiParam.RENTAL_DETAIL_PATH + `/${carRentalId}`;
    return this.http.get<CarRental>(carRentalUrl);
  }

  getCarRentalHistory(): Observable<CarRental[]> {
    let carRentalHistoryUrl = apiParam.BASE_URL + apiParam.RENTAL_HISTORY_PATH;
    return this.http.get<CarRental[]>(carRentalHistoryUrl);
  }

  addPayementAgent(payment: Payment){
    let addPayementUrl = apiParam.BASE_URL + apiParam.ADD_PAYMENT_AGENT_PATH;
    return this.http.post<Observable<HttpResponse<any>>>(addPayementUrl, payment, {observe: 'response'});
  }

  addPayementClient(payment: Payment){
    let addPayementUrl = apiParam.BASE_URL + apiParam.ADD_PAYMENT_CLIENT_PATH;
    return this.http.post<Observable<HttpResponse<any>>>(addPayementUrl, payment, {observe: 'response'});
  }

  updateCarRentalStatus(carRental: CarRental, newStatus: string){
    let updateCarRentalStatusUrl = apiParam.BASE_URL + apiParam.UPDATE_RENTAL_STATUS_PATH + `/${carRental.id}/${newStatus}`;
    return this.http.get<Observable<HttpResponse<any>>>(updateCarRentalStatusUrl, {observe: 'response'});
  }
}
