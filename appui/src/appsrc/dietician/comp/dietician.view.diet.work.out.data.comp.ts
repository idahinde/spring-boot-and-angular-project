import {Component, OnInit} from "@angular/core";
import {DieticianService} from "../service";
import {Observable} from "rxjs";

@Component({
  templateUrl: "./html/dietician.view.diet.work.out.data.page.html"
})
export class DieticianViewDietWorkOutDataComp  {

  workdatalist$: Observable<any> = this._dieticianService.fetchDieticianWorkOutData();

  constructor(private _dieticianService: DieticianService) {
  }

  pad(str: any) {
    return String(str).padStart(4, '0');
  }
}
