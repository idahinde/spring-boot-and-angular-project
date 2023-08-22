import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import * as dr from "./comp";
import {HttpClientModule} from "@angular/common/http";
import {DieticianGuard, DieticianService} from "./service";

const routes: Routes = [
  {path: "", component: dr.DieticianLoginComp, data: {title: "Dietician Login"}},
  {path: "login", component: dr.DieticianLoginComp, data: {title: "Dietician Login"}},
  {path: "register", component: dr.DieticianRegisterComp, data: {title: "Dietician Register"}},
  {
    path: "panel", component: dr.DieticianBaseComp, canActivate: [DieticianGuard], children: [
      {path: "", component: dr.DieticianViewAppointmentComp, data: {title: "View Appointment"}},
      {path: "view-appointment", component: dr.DieticianViewAppointmentComp, data: {title: "View Appointment"}},
      {path: "appointment-action", component: dr.DieticianAppointmentActionComp, data: {title: "Appointment Action"}},
      {path: "appointment-list", component: dr.DieticianAppointmentListComp, data: {title: "Appointment List"}},
      {
        path: "appointment-work-out",
        component: dr.DieticianAppointmentWorkOutComp,
        data: {title: "Appointment Work Out"}
      },
      {
        path: "view-work-out-data",
        component: dr.DieticianViewDietWorkOutDataComp,
        data: {title: "Diet Work Out Data List"}
      },
    ]
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule, CommonModule,
    RouterModule.forChild(routes), HttpClientModule
  ],
  providers: [
    DieticianService
  ],
  declarations: [
    ...dr.logComps
  ]
})
export class DieticianModule {
}
