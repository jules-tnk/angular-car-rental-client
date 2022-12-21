import {Component, Input, OnInit} from '@angular/core';
import {CarDescription} from "../model/carDescription";
import {ActivatedRoute} from "@angular/router";
import {CatalogService} from "../services/catalog/catalog.service";
import {CartService} from "../services/cart/cart.service";

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
              private cartService: CartService) { }

  ngOnInit(): void {
    this.carDescription = this.getCarDescription();
  }

  addToCart() {
    if (this.carDescription){
      this.cartService.addToCart(this.carDescription);
    }
  }

  private getCarDescription() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.catalogService.getCarDescriptionById(id);
  }
}
