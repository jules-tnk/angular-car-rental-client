import { Component, OnInit } from '@angular/core';
import {CarDescription} from "../../../model/carDescription";
import {ActivatedRoute} from "@angular/router";
import {CatalogService} from "../../../services/catalog/catalog.service";
import {TransactionService} from "../../../services/transaction/transaction.service";

@Component({
  selector: 'app-rental-request',
  templateUrl: './rental-request.component.html',
  styleUrls: ['./rental-request.component.scss']
})
export class RentalRequestComponent implements OnInit {
  carDescription?: CarDescription;

  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService,
              private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.carDescription = this.getCarDescription();
  }

  private getCarDescription() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.catalogService.getCarDescriptionById(id);
  }

  rentCar(isWithDriver: boolean, startDateStr: string, endDateStr: string) {
    if (this.carDescription) {
      this.transactionService.sendTransactionRequest(this.carDescription, isWithDriver, startDateStr, endDateStr);
    }
  }

}
