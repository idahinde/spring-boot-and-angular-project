import {Component, OnDestroy, OnInit} from "@angular/core";
import {DieticianService} from "../service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {notEqualTo} from "../../../app/app.functions";
import {HttpParams} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  templateUrl: "./html/dietician.appointment.action.page.html"
})
export class DieticianAppointmentActionComp implements OnInit, OnDestroy {

  appointmentdata: any;
  frmdata!: FormGroup;
  loading: boolean = false;

  constructor(private _dieticianService: DieticianService, private _router: Router,
              private _formBuilder: FormBuilder, private _toast: ToastrService) {
    let data: any = sessionStorage.getItem("healthify.dietician.appointment.data");
    if (!data) {
      this._router.navigate(["/dietician", "panel", "view-appointment"]);
    }
    this.appointmentdata = JSON.parse(data);
  }

  ngOnInit(): void {
    this.frmdata = this._formBuilder.group({
      statusaction: ["empty", [notEqualTo("empty")]]
    });
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem("healthify.dietician.appointment.data");
  }

  pad(str: any) {
    return String(str).padStart(4, '0');
  }

  postEvent() {
    this.loading = true;

    const param = new HttpParams()
      .append("Id", `${this.appointmentdata.id}`)
      .append("statusAction", `${this.frmdata.controls["statusaction"].value}`);

    this._dieticianService.saveAppointmentAction(param).subscribe(res => {
        this._toast.success(res.message, res.title);
        this._router.navigate(["/dietician", "panel", "view-appointment"]);
      },
      err => {
        this.loading = false;
        this._toast.error(err.error.message, err.error.title);
      },
      () => this.loading = false);
  }

}
