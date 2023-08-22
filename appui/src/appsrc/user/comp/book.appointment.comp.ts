import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service";
import {bsDateConfig, dateFormatterFn, greaterThanZero, notEqualTo} from "../../../app/app.functions";
import {Observable} from "rxjs";
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";
import {HttpParams} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  templateUrl: "./html/book.appointment.page.html"
})
export class BookAppointmentComp implements OnInit {

  frmbookdata!: FormGroup;
  mindate: Date = new Date();
  loading: boolean = false;
  bsConfig: Partial<BsDatepickerConfig> = bsDateConfig;
  fetchdietician$: Observable<any> = this._userService.fetchDietician();

  constructor(private _formBuilder: FormBuilder, private _userService: UserService,
              private _toast: ToastrService) {
  }

  ngOnInit(): void {
    this.frmbookdata = this._formBuilder.group({
      dieticianId: ["0", [greaterThanZero]],
      reason: ["", [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      appDate: ["", [Validators.required]],
      appTime: ["empty", [notEqualTo("empty")]]
    });
  }

  val(key: string, error: string): boolean {
    return this.frmbookdata.controls[key].touched && this.frmbookdata.controls[key].hasError(error);
  }

  postAppointment() {
    if (!this.frmbookdata.invalid) {
      this.loading = true;
      const userid: any = sessionStorage.getItem("healthify.user.userid");
      const formatedDate: string = dateFormatterFn(this.frmbookdata.controls["appDate"].value);
      const params = new HttpParams()
        .append("userId", `${userid}`)
        .append("dieticianId", `${this.frmbookdata.controls["dieticianId"].value}`)
        .append("reason", `${this.frmbookdata.controls["reason"].value}`)
        .append("appDate", `${formatedDate}`)
        .append("appTime", `${this.frmbookdata.controls["appTime"].value}`);

      this._userService.postAppointment(params).subscribe(res => {
          this.loading = false;
          this.frmbookdata.reset({
            dieticianId: "0", reason: "", appDate: "", appTime: "empty"
          });
          this._toast.success(res.message, res.title);
        },
        err => {
          this.loading = false;
          this._toast.error(err.error.message, err.error.title);
        },
        () => this.loading = false);
    } else {
      this.frmbookdata.markAllAsTouched();
    }
  }

}
