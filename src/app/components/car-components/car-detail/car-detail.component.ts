import {Component, Input, OnInit} from '@angular/core';
import {CarDescription} from "../../../model/carDescription";
import {ActivatedRoute} from "@angular/router";
import {CatalogService} from "../../../services/catalog/catalog.service";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  @Input()
  carDescription?: CarDescription;

  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService,
              ) { }

  ngOnInit(): void {
    this.getCarDescriptionFromApi();
  }

  private getCarDescriptionFromApi(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.catalogService.getCarDescriptionByIdFromApi(id).subscribe(
      carDescriptionFromApi => this.carDescription = carDescriptionFromApi
    );
  }
}
