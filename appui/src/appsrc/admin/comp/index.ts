import {AdminLoginComp} from "./admin.login.comp";
import {AdminBaseComp} from "./admin.base.comp";
import {AdminViewUserComp} from "./admin.view.user.comp";
import {AdminCreateUserDataComp} from "./admin.create.user.data.comp";
import {AdminViewDieticianComp} from "./admin.view.dietician.comp";
import {AdminCreateDieticianComp} from "./admin.create.dietician.comp";
import {AdminViewAppointmentComp} from "./admin.view.appointment.comp";

export const adminComp: any[] = [
  AdminLoginComp, AdminBaseComp, AdminViewUserComp,
  AdminCreateUserDataComp, AdminViewDieticianComp,
  AdminCreateDieticianComp, AdminViewAppointmentComp
]

export * from "./admin.login.comp";
export * from "./admin.base.comp";
export * from "./admin.view.user.comp";
export * from "./admin.create.user.data.comp";
export * from "./admin.view.dietician.comp";
export * from "./admin.create.dietician.comp";
export * from "./admin.view.appointment.comp";
