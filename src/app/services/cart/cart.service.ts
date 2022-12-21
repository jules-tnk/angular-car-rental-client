import { Injectable } from '@angular/core';
import {CarDescription} from "../../model/carDescription";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carDescriptions: CarDescription[] = [];

  constructor() { }
  addToCart(carDescription: CarDescription) {
  }

  removeFromCart(carDescription: CarDescription){
  }
}
