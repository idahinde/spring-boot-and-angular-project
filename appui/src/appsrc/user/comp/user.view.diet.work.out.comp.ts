import {Component} from "@angular/core";
import {UserService} from "../service";
import {Observable} from "rxjs";

@Component({
  templateUrl: "./html/user.view.diet.work.out.page.html"
})
export class UserViewDietWorkOutComp {

  appointmentdata$: Observable<any> = this._userService.fetchDietWorkData();

  constructor(private _userService: UserService) {
  }

  pad(str: any) {
    return String(str).padStart(4, '0');
  }

}
