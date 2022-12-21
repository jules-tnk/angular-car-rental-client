import {Component, Input, OnInit} from '@angular/core';
import {CarDescription} from "../model/carDescription";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent implements OnInit {

  @Input()
  carDescription?: CarDescription;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    if (this.carDescription){
      this.cartService.addToCart(this.carDescription);
    }
  }
}
