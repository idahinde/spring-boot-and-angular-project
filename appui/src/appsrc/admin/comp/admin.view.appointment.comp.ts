import {Component} from "@angular/core";
import {AdminService} from "../service";
import {Observable} from "rxjs";

@Component({
  templateUrl: "./html/admin.view.appointment.page.html"
})
export class AdminViewAppointmentComp {

  appointmentdataref$: Observable<any> = this._adminService.fetchAllAppointment();

  constructor(private _adminService: AdminService) {
  }

  pad(str: any) {
    return String(str).padStart(4, '0');
  }

}
