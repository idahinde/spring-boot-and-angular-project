import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AdminService} from "./service";
import * as ad from "./comp";

const routes: Routes = [
  {path: "", component: ad.AdminLoginComp, data: {title: "Admin Login"}},
  {path: "login", component: ad.AdminLoginComp, data: {title: "Admin Login"}},
  {
    path: "panel", component: ad.AdminBaseComp, children: [
      {path: "", component: ad.AdminViewUserComp, data: {title: "View User"}},
      {path: "view-user", component: ad.AdminViewUserComp, data: {title: "View User"}},
      {path: "create-user", component: ad.AdminCreateUserDataComp, data: {title: "Create User"}},
      {path: "view-dietician", component: ad.AdminViewDieticianComp, data: {title: "View Dietician"}},
      {path: "create-dietician", component: ad.AdminCreateDieticianComp, data: {title: "Create Dietician"}},
      {path: "view-appointment", component: ad.AdminViewAppointmentComp, data: {title: "View Appointment"}}
    ]
  },
];

@NgModule({
  imports: [
    ReactiveFormsModule, CommonModule,
    RouterModule.forChild(routes), HttpClientModule
  ],
  providers: [
    AdminService
  ],
  declarations: [
    ...ad.adminComp
  ]
})
export class AdminModule {
}
