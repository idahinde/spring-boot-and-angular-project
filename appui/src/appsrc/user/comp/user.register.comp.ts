import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {greaterThanZero, passwordMatch} from "../../../app/app.functions";
import {UserService} from "../service";
import {HttpParams} from "@angular/common/http";

@Component({
  templateUrl: "./html/user.register.page.html",
  styles: [`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
    }
  `]
})
export class UserRegisterComp implements OnInit {

  frmForm!: FormGroup;
  loading: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _toast: ToastrService,
              private _userService: UserService) {
  }

  ngOnInit(): void {
    this.frmForm = this._formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z \-\']+')]],
      lastName: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z \-\']+')]],
      phoneNumber: ["", [Validators.required, Validators.minLength(9)]],
      emailAddress: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(3)]],
      age: ["", [Validators.required, Validators.minLength(2), greaterThanZero]],
      height: ["", [Validators.required, Validators.minLength(1), greaterThanZero]],
      currentWeight: ["", [Validators.required, Validators.minLength(1), greaterThanZero]],
      targetWeight: ["", [Validators.required, Validators.minLength(1), greaterThanZero]],
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
        .append("phoneNumber", `${this.frmForm.controls["phoneNumber"].value}`)
        .append("emailAddress", `${this.frmForm.controls["emailAddress"].value}`)
        .append("password", `${this.frmForm.controls["confirmPassword"].value}`)
        .append("age", `${this.frmForm.controls["age"].value}`)
        .append("height", `${this.frmForm.controls["height"].value}`)
        .append("currentWeight", `${this.frmForm.controls["currentWeight"].value}`)
        .append("targetWeight", `${this.frmForm.controls["targetWeight"].value}`);

      this._userService.register(param).subscribe(res => {
          this.loading = false;
          this.frmForm.reset({
            firstName: "", lastName: "", phoneNUmber: "",
            age: "", height: "", targetWeight: "", emailAddress: "",
            password: "", confirmPassword: "", currentWeight: ""
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
