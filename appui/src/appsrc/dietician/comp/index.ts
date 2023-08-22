import {DieticianLoginComp} from "./dietician.login.comp";
import {DieticianRegisterComp} from "./dietician.register.comp";
import {DieticianBaseComp} from "./dietician.base.comp";
import {DieticianViewAppointmentComp} from "./dietician.view.appointment.comp";
import {DieticianAppointmentActionComp} from "./dietician.appointment.action.comp";
import {DieticianAppointmentListComp} from "./dietician.appointment.list.comp";
import {DieticianAppointmentWorkOutComp} from "./dietician.appointment.work.out.comp";
import {DieticianViewDietWorkOutDataComp} from "./dietician.view.diet.work.out.data.comp";

export const logComps: any[] = [
  DieticianLoginComp, DieticianRegisterComp, DieticianBaseComp,
  DieticianViewAppointmentComp, DieticianAppointmentActionComp,
  DieticianAppointmentListComp, DieticianAppointmentWorkOutComp,
  DieticianViewDietWorkOutDataComp
];

export * from "./dietician.login.comp";
export * from "./dietician.register.comp";
export * from "./dietician.base.comp";
export * from "./dietician.view.appointment.comp";
export * from "./dietician.appointment.action.comp";
export * from "./dietician.appointment.list.comp";
export * from "./dietician.appointment.work.out.comp";
export * from "./dietician.view.diet.work.out.data.comp";
