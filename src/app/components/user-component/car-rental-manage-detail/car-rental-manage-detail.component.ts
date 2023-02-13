import { Component, OnInit } from '@angular/core';
import {CarRental} from "../../../model/carRental";
import {TransactionService} from "../../../services/transaction/transaction.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car-rental-manage-detail',
  templateUrl: './car-rental-manage-detail.component.html',
  styleUrls: ['./car-rental-manage-detail.component.scss']
})
export class CarRentalManageDetailComponent implements OnInit {
  carRental?: CarRental;
  constructor(private transactionService: TransactionService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarRentalFromApi();
  }

  getCarRentalFromApi(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transactionService.getCarRental(id).subscribe(
      carRental => {
        this.carRental = carRental;
      }
    )
  }

  cancelCarRental() {
    if (this.carRental) {
      this.transactionService.cancelCarRental(this.carRental.id).subscribe(
        response => {
          if (response.status === 200) {
            this.getCarRentalFromApi();
          }
        }
      )
    }
  }

  saveNewStatus(newStatus: string) {
    if (this.carRental) {
      this.transactionService.updateCarRentalStatus(this.carRental, newStatus).subscribe(
        response => {
          if (response.status === 200) {
            this.getCarRentalFromApi();
          }
        }
      )
    }
  }
}
