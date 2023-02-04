import { Component, OnInit } from '@angular/core';
import {CarDescription} from "../../../model/carDescription";
import {ActivatedRoute, Router} from "@angular/router";
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
              private router: Router,
              private catalogService: CatalogService,
              private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getCarDescription();
  }

  private getCarDescription() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.catalogService.getCarDescriptionByIdFromApi(id).subscribe(
      carDescriptionFromApi => this.carDescription = carDescriptionFromApi
    );
  }

  rentCar(isWithDriver: boolean, startDateStr: string, endDateStr: string) {
    if (this.carDescription) {
      this.transactionService.sendCarRentalRequest(this.carDescription,
        isWithDriver,
        startDateStr,
        endDateStr).subscribe(
          response => {
            if (response.status === 201){
              window.alert("Transaction created");
              this.router.navigate(["/profile"]);
            } else {
              window.alert("Transaction error")
            }
          }
      );
    }
  }

}
