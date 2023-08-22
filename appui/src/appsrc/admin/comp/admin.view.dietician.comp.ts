import {Component, OnInit} from "@angular/core";
import {AdminService} from "../service";
import {ToastrService} from "ngx-toastr";

@Component({
  templateUrl: "./html/admin.view.dietician.page.html"
})
export class AdminViewDieticianComp implements OnInit {

  dieticiandatalist: any[] = [];

  constructor(private _adminService: AdminService, private _toast: ToastrService) {
  }

  pad(str: any) {
    return String(str).padStart(4, '0');
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this._adminService.fetchDieticianList().subscribe(res => this.dieticiandatalist = res);
  }

  deleteDietician(id: any) {
    this._adminService.deleteDietician(id).subscribe(res => {
        this.load();
        this._toast.success(res.message, res.title);
      },
      err => {
        this._toast.error(err.error.message, err.error.title);
      })
  }

}
