import {Component, OnInit} from "@angular/core";
import {DieticianService} from "../service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  templateUrl: "./html/dietician.view.appointment.page.html"
})
export class DieticianViewAppointmentComp implements OnInit {

  title:string="Accept/Reject Appointment";
  appointmentdatalist$: Observable<any> = this._dieticianService.fetchDieticianAppointment("pending");

  constructor(private _dieticianService: DieticianService, private _router: Router) {
  }

  ngOnInit(): void {
    sessionStorage.removeItem("healthify.dietician.appointment.data");
  }

  goto(param: any) {
    sessionStorage.setItem("healthify.dietician.appointment.data", JSON.stringify(param));
    this._router.navigate(["/dietician", "panel", "appointment-action"]);
  }

}
