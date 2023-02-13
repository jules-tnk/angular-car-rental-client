import {Injectable} from '@angular/core';
import {CarDescription} from "../../model/carDescription";
import {apiParam} from "../../model/constants";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private carDescriptions: CarDescription[] = [];

  constructor(private http: HttpClient) {
  }

  getAllCars() {
    return this.carDescriptions;
  }

  getCarDescriptionById(id: number) {
    return this.carDescriptions.find(cd => cd.id == id );
  }

  getAllCarsFromApi(): Observable<CarDescription[]>{
    let carsUrl: string = apiParam.BASE_URL+apiParam.GET_ALL_CAR_DESCRIPTION_PATH;
    return this.http.get<CarDescription[]>(carsUrl).pipe(
      catchError(this.handleError<CarDescription[]>("getAllCars", []))
    )
  }

  getCarDescriptionByIdFromApi(id: number): Observable<CarDescription> {
    let carUrl: string = apiParam.BASE_URL+apiParam.GET_ALL_CAR_DESCRIPTION_PATH+`/${id}`;
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
