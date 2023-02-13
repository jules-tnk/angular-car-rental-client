import { Component, OnInit } from '@angular/core';
import {CarRental} from "../../../model/carRental";
import {TransactionService} from "../../../services/transaction/transaction.service";

@Component({
  selector: 'app-car-rental-manage-list',
  templateUrl: './car-rental-manage-list.component.html',
  styleUrls: ['./car-rental-manage-list.component.scss']
})
export class CarRentalManageListComponent implements OnInit {
  carRentalHistory: CarRental[] = [];

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.getCarRentalHistory();
  }

  getCarRentalHistory(){
    this.transactionService.getCarRentalHistory().subscribe(
      carRentalHistory => {
        this.carRentalHistory = carRentalHistory;
      }
    )
  }

}
