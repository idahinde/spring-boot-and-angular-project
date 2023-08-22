import {Component, OnInit} from "@angular/core";
import {DieticianService} from "../service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {HttpParams} from "@angular/common/http";

@Component({
  templateUrl: "./html/dietician.appointment.work.out.page.html"
})
export class DieticianAppointmentWorkOutComp implements OnInit {

  appointmentdata: any;
  frmdata!: FormGroup;
  loading: boolean = false;

  constructor(private _dieticianService: DieticianService, private _router: Router,
              private _formBuilder: FormBuilder, private _toast: ToastrService) {
    let data: any = sessionStorage.getItem("healthify.dietician.appointment.data");
    if (!data) {
      this._router.navigate(["/dietician", "panel", "appointment-list"]);
    }
    this.appointmentdata = JSON.parse(data);
  }

  val(key: string): boolean {
    return this.frmdata.controls[key].touched && this.frmdata.controls[key].hasError("required");
  }

  ngOnInit(): void {
    this.frmdata = this._formBuilder.group({
      prescription: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  pad(str: any) {
    return String(str).padStart(4, '0');
  }

  postEvent() {
    if (!this.frmdata.invalid) {
      this.loading = true;

      const param = new HttpParams()
        .append("Id", `${this.appointmentdata.id}`)
        .append("prescription", `${this.frmdata.controls["prescription"].value}`);

      this._dieticianService.saveUserDietWorkData(param).subscribe(res => {
          this._toast.success(res.message, res.title);
          this._router.navigate(["/dietician", "panel", "appointment-list"]);
        },
        err => {
          this.loading = false;
          this._toast.error(err.error.message, err.error.title);
        },
        () => this.loading = false);
    } else {
      this.frmdata.markAllAsTouched();
    }
  }

}
