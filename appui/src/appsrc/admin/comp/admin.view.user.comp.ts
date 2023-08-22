import {Component, OnInit} from "@angular/core";
import {AdminService} from "../service";
import {ToastrService} from "ngx-toastr";

@Component({
  templateUrl: "./html/admin.view.user.page.html"
})
export class AdminViewUserComp implements OnInit {

  userdatalist: any[] = []

  constructor(private _adminService: AdminService, private _toast: ToastrService) {
  }

  ngOnInit(): void {
    this.load();
  }

  pad(str: any) {
    return String(str).padStart(4, '0');
  }

  deleteUser(id: any) {
    this._adminService.deleteUser(id).subscribe(res => {
        this.load();
        this._toast.success(res.message, res.title);
      },
      err => {
        this._toast.error(err.error.message, err.error.title);
      })
  }

  load() {
    this._adminService.fetchUserList().subscribe(res => this.userdatalist = res);
  }

}
