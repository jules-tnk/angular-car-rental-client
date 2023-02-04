import {Injectable} from '@angular/core';
import {CarDescription} from "../../model/carDescription";
import {API_PARAM} from "../../model/constants";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private carDescriptions: CarDescription[] = [];

  constructor(private http: HttpClient) {
    for (let i = 0; i < 5; i++) {
      this.carDescriptions.push(
        {
          id: i,
          brand: "BMW",
          model: "Model one",
          maxPower: 100*i,
          seatNumber: 4,
          color: "grey",
          imgUrl: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/3-0-csl/bmw-3-0-csl-stage-teaser.png",
          pricePerHour: 100*i
        }
      )
    }
    for (let i = 5; i < 10; i++) {
      this.carDescriptions.push(
        {
          id: i,
          brand: "Mercedes",
          model: "Model three",
          maxPower: 100*i,
          seatNumber: 4,
          color: "grey",
          imgUrl: "https://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2020/oem/2020_mercedes-benz_amg-gt_sedan_53_fq_oem_1_1600.jpg",
          pricePerHour: 75*i
        }
      )
    }
  }

  getAllCars() {
    return this.carDescriptions;
  }

  getCarDescriptionById(id: number) {
    return this.carDescriptions.find(cd => cd.id == id );
  }

  getAllCarsFromApi(): Observable<CarDescription[]>{
    let carsUrl: string = API_PARAM.BASE_URL+API_PARAM.GET_ALL_CAR_DESCRIPTION_PATH;
    return this.http.get<CarDescription[]>(carsUrl).pipe(
      catchError(this.handleError<CarDescription[]>("getAllCars", []))
    )
  }

  getCarDescriptionByIdFromApi(id: number): Observable<CarDescription> {
    let carUrl: string = API_PARAM.BASE_URL+API_PARAM.GET_ALL_CAR_DESCRIPTION_PATH+`/${id}`;
    return this.http.get<CarDescription>(carUrl).pipe(
      catchError(this.handleError<CarDescription>("getAllCars"))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      window.alert(
        JSON.stringify(error.error.exception)+"\n"+
        JSON.stringify(error.error.message)+"\n"+
        JSON.stringify(error.message)
      )
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
