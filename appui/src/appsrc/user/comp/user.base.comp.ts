import {Component, OnInit} from "@angular/core";

@Component({
  templateUrl: "./html/user.base.page.html"
})
export class UserBaseComp implements OnInit {

  fullname: any = sessionStorage.getItem("healthify.user.fullname");

  constructor() {
  }

  ngOnInit(): void {
  }

  logOut() {
    sessionStorage.removeItem("healthify.user.userid");
    sessionStorage.removeItem("healthify.user.fullname");
    sessionStorage.removeItem("healthify.user.emailaddress");
    sessionStorage.removeItem("healthify.user.phone");
  }

}
