import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DieticianService} from "../service";
import {HttpParams} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {passwordMatch} from "../../../app/app.functions";

@Component({
  templateUrl: "./html/dietician.register.page.html"
})
export class DieticianRegisterComp implements OnInit {

  frmForm!: FormGroup;
  loading: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _toast: ToastrService,
              private _dieticianService: DieticianService) {
  }

  ngOnInit(): void {
    this.frmForm = this._formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z \-\']+')]],
      lastName: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z \-\']+')]],
      emailAddress: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(3)]]
    }, {validators: passwordMatch("password", "confirmPassword")});
  }

  val(key: string, error: string): boolean {
    return this.frmForm.controls[key].hasError(error);
  }

  req(key: string): boolean {
    return this.frmForm.controls[key].touched && this.frmForm.controls[key].hasError("required");
  }

  register() {
    if (!this.frmForm.invalid) {

      this.loading = true;

      const param = new HttpParams()
        .append("firstName", `${this.frmForm.controls["firstName"].value}`)
        .append("lastName", `${this.frmForm.controls["lastName"].value}`)
        .append("emailAddress", `${this.frmForm.controls["emailAddress"].value}`)
        .append("password", `${this.frmForm.controls["confirmPassword"].value}`);

      this._dieticianService.register(param).subscribe(res => {
          this.loading = false;
          this.frmForm.reset({
            firstName: "", lastName: "",
            emailAddress: "", password: "",
            confirmPassword: ""
          });
          this._toast.success(res.message, res.title);
        },
        err => {
          this.loading = false;
          this._toast.error(err.error.message, err.error.title);
        },
        () => this.loading = false);
    } else {
      this.frmForm.markAllAsTouched();
    }
  }

}
