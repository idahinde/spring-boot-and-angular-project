import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import * as ur from "./comp";
import {userComp} from "./comp";
import {UserService} from "./service";
import {UserGuard} from "./service/user.guard";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";

const routes: Routes = [
  {path: "", component: ur.UserLoginComp, data: {title: "User Login"}},
  {path: "login", component: ur.UserLoginComp, data: {title: "User Login"}},
  {path: "register", component: ur.UserRegisterComp, data: {title: "User Registration"}},
  {
    path: "panel", component: ur.UserBaseComp, canActivate: [UserGuard], children: [
      {path: "", component: ur.BookAppointmentComp, data: {title: "Book Appointment"}},
      {path: "book-appointment", component: ur.BookAppointmentComp, data: {title: "Book Appointment"}},
      {path: "view-appointment", component: ur.ViewAppointmentListComp, data: {title: "View Appointments"}},
      {path: "view-diet-work-data", component: ur.UserViewDietWorkOutComp, data: {title: "View Diet Work Out"}}
    ]
  },
];

@NgModule({
  imports: [
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule, CommonModule,
    RouterModule.forChild(routes), HttpClientModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    ...userComp
  ]
})
export class UserModule {
}
