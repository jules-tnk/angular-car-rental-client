import { Component, OnInit } from '@angular/core';
import {CarDescription} from "../../../model/carDescription";
import {CatalogService} from "../../../services/catalog/catalog.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  carDescriptions: CarDescription[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.getAllCarsFromApi()
  }

  getAllCars(){
    this.carDescriptions = this.catalogService.getAllCars();
  }

  getAllCarsFromApi(){
    this.catalogService.getAllCarsFromApi().subscribe(
      carDescriptionsFromApi => this.carDescriptions = carDescriptionsFromApi
    )
  }

}
