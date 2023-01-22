import {Injectable, OnInit} from '@angular/core';
import {CarDescription} from "../../model/carDescription";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  carDescriptions: CarDescription[] = [];

  constructor() {
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
}
