import { Component, OnInit } from '@angular/core';
import {CarRental} from "../../../model/carRental";
import {TransactionService} from "../../../services/transaction/transaction.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car-rental-detail',
  templateUrl: './car-rental-detail.component.html',
  styleUrls: ['./car-rental-detail.component.scss']
})
export class CarRentalDetailComponent implements OnInit {
  carRental?: CarRental;
  constructor(private transactionService: TransactionService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getCarRental();
  }

  getCarRental(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transactionService.getCarRental(id).subscribe(
      carRentalResponse => this.carRental = carRentalResponse
    );
  }

  cancelCarRental() {
    if (this.carRental){
      this.transactionService.cancelCarRental(this.carRental?.id).subscribe(
        response => {
          if (response.status === 200) {
            this.getCarRental();
          }
        }
      );
    }
  }
}
