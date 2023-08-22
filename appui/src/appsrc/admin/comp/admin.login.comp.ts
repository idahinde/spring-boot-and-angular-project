import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AdminService} from "../service";
import {HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  templateUrl: "./html/admin.login.page.html"
})
export class AdminLoginComp implements OnInit {

  frmGroup!: FormGroup;
  loading: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _toast: ToastrService,
              private _adminService: AdminService, private _router: Router) {
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

    this._adminService.login(param).subscribe(res => {
        this.loading = false;
        this._toast.success(res.message, res.title);
        sessionStorage.setItem("healthify.admin.userid", res.userid);
        sessionStorage.setItem("healthify.admin.fullname", res.fullname);
        sessionStorage.setItem("healthify.admin.emailaddress", res.emailaddress);
        this._router.navigate(['/admin', 'panel', 'view-user']);
      },
      err => {
        this.loading = false;
        this._toast.error(err.error.message, err.error.title);
      },
      () => this.loading = false);
  }

}
