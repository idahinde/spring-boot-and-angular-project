import {Component} from "@angular/core";
import {UserService} from "../service";
import {Observable} from "rxjs";

@Component({
  templateUrl: "./html/view.appointment.list.page.html"
})
export class ViewAppointmentListComp {

  appointmentdata$: Observable<any> = this._userService.fetchAppointment();

  constructor(private _userService: UserService) {
  }

}
