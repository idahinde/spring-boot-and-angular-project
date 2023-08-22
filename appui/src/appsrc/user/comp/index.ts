import {UserLoginComp} from "./user.login.comp";
import {UserRegisterComp} from "./user.register.comp";
import {UserBaseComp} from "./user.base.comp";
import {BookAppointmentComp} from "./book.appointment.comp";
import {ViewAppointmentListComp} from "./view.appointment.list.comp";
import {UserViewDietWorkOutComp} from "./user.view.diet.work.out.comp";

export const userComp: any[] = [
  UserLoginComp, UserRegisterComp, UserBaseComp,
  BookAppointmentComp, ViewAppointmentListComp,
  UserViewDietWorkOutComp
]

export * from "./user.login.comp";
export * from "./user.register.comp";
export * from "./user.base.comp";
export * from "./book.appointment.comp";
export * from "./view.appointment.list.comp";
export * from "./user.view.diet.work.out.comp";
