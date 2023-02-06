import { Component, OnInit } from '@angular/core';
import {CarRental} from "../../../model/carRental";
import {TransactionService} from "../../../services/transaction/transaction.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.scss']
})
export class MissionDetailComponent implements OnInit {
  mission?: CarRental;
  constructor(private transactionService: TransactionService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getCarRental();
  }

  getCarRental(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transactionService.getCarRental(id).subscribe(
      carRentalResponse => this.mission = carRentalResponse
    );
  }

}
