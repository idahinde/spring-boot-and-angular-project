import {Component, OnInit} from "@angular/core";
import {DieticianService} from "../service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  templateUrl: "./html/dietician.view.appointment.page.html"
})
export class DieticianAppointmentListComp implements OnInit {

  title: string = "Appointment List";
  appointmentdatalist$: Observable<any> = this._dieticianService.fetchDieticianAppointment("accept");

  constructor(private _dieticianService: DieticianService, private _router: Router) {
  }

  ngOnInit(): void {
    sessionStorage.removeItem("healthify.dietician.appointment.data");
  }

  goto(param: any) {
    sessionStorage.setItem("healthify.dietician.appointment.data", JSON.stringify(param));
    this._router.navigate(["/dietician", "panel", "appointment-work-out"]);
  }

}
