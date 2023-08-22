import {Component, OnInit} from "@angular/core";

@Component({
  templateUrl: "./html/dietician.base.page.html"
})
export class DieticianBaseComp  {

  fullname: any = sessionStorage.getItem("healthify.dietician.fullname");

  constructor() {
  }

  logOut() {
    sessionStorage.removeItem("healthify.dietician.userid");
    sessionStorage.removeItem("healthify.dietician.fullname");
    sessionStorage.removeItem("healthify.dietician.emailaddress");
  }

}
