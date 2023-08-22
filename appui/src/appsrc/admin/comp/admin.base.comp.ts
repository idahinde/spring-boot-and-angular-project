import {Component} from "@angular/core";

@Component({
  templateUrl: "./html/admin.base.page.html"
})
export class AdminBaseComp {

  fullname: any = sessionStorage.getItem("healthify.admin.emailaddress");

  constructor() {
  }

  logOut() {
    sessionStorage.removeItem("healthify.admin.userid");
    sessionStorage.removeItem("healthify.admin.fullname");
    sessionStorage.removeItem("healthify.admin.emailaddress");
  }

}
