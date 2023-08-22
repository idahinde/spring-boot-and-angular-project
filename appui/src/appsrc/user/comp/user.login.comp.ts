import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service";
import {HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  templateUrl: "./html/user.login.page.html"
})
export class UserLoginComp implements OnInit {

  frmGroup!: FormGroup;
  loading: boolean = false;

  constructor(private _router: Router, private _toast: ToastrService,
              private _formBuilder: FormBuilder, private _userService: UserService) {
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

    this._userService.login(param).subscribe(res => {
        this.loading = false;
        this._toast.success(res.message, res.title);
        sessionStorage.setItem("healthify.user.userid", res.userid);
        sessionStorage.setItem("healthify.user.fullname", res.fullname);
        sessionStorage.setItem("healthify.user.emailaddress", res.emailaddress);
        sessionStorage.setItem("healthify.user.phone", res.phone);
        this._router.navigate(['/user', 'panel', 'book-appointment']);
      },
      err => {
        this.loading = false;
        this._toast.error(err.error.message, err.error.title);
      },
      () => this.loading = false);
  }

}
