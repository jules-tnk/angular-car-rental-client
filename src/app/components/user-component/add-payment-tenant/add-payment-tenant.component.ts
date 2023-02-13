import { Component, OnInit } from '@angular/core';
import {CarRental} from "../../../model/carRental";
import {ActivatedRoute, Router} from "@angular/router";
import {TransactionService} from "../../../services/transaction/transaction.service";
import {Location} from "@angular/common";
import {Payment} from "../../../model/payment";

@Component({
  selector: 'app-add-payment-tenant',
  templateUrl: './add-payment-tenant.component.html',
  styleUrls: ['./add-payment-tenant.component.scss']
})
export class AddPaymentTenantComponent implements OnInit {

  carRental?: CarRental;
  constructor(private route: ActivatedRoute,
              private router:Router,
              private transactionService: TransactionService,
              private location: Location) { }

  ngOnInit(): void {
    this.getCarRental()
  }

  getCarRental() {
    let id: number = this.route.snapshot.params['id'];
    this.transactionService.getCarRental(id).subscribe(
      carRentalFromApi => {
        this.carRental = carRentalFromApi
      }
    );
  }

  addPayment(method: string, amountStr: string) {
    if (this.carRental){
      /*Check parameters validity*/
      if (method == "" || amountStr == ""){
        alert("Please fill all fields");
        return;
      }
      let amount: number = Number(amountStr);
      if (amount <= 0){
        alert("Please enter a valid amount");
        return;
      }
      if (amount > this.carRental?.totalPrice - this.carRental?.alreadyPaid){
        alert("Please enter an amount less than the remaining amount");
        return;
      }

      /*Create the payment object*/
      let payment: Payment = {
        carRentalId: this.carRental?.id,
        date: new Date(),
        method: method,
        amount: amount
      }

      /*send add payment request*/
      this.transactionService.addPayementClient(payment).subscribe(
        response => {
          if (response.status == 200){
            this.location.back();
          }
          console.log(response);
        }
      )
    }
  }
}
