import {Component, Input, OnInit} from '@angular/core';
import {CarDescription} from "../../../model/carDescription";

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent implements OnInit {

  @Input()
  carDescription?: CarDescription;
  constructor() { }

  ngOnInit(): void {
  }

}
