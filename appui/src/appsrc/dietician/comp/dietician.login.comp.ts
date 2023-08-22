import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {DieticianService} from "../service";
import {HttpParams} from "@angular/common/http";

@Component({
  templateUrl: "./html/dietician.login.page.html"
})
export class DieticianLoginComp implements OnInit {

  frmGroup!: FormGroup;
  loading: boolean = false;

  constructor(private _router: Router, private _toast: ToastrService,
              private _formBuilder: FormBuilder, private _dieticianService: DieticianService) {
  }

  ngOnInit(): void {
    this.frmGroup = this._formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  loginEvent() {
    this.loading = true;

    const param = new HttpParams()
      .append("username", `${this.frmGroup.controls["username"].value}`)
      .append("password", `${this.frmGroup.controls["password"].value}`);

    this._dieticianService.login(param).subscribe(res => {
        this.loading = false;
        this._toast.success(res.message, res.title);
        sessionStorage.setItem("healthify.dietician.userid", res.userid);
        sessionStorage.setItem("healthify.dietician.fullname", res.fullname);
        sessionStorage.setItem("healthify.dietician.emailaddress", res.emailaddress);
        this._router.navigate(['/dietician', 'panel', 'view-appointment']);
      },
      err => {
        this.loading = false;
        this._toast.error(err.error.message, err.error.title);
      },
      () => this.loading = false);
  }

}
