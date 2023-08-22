import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const api = environment.apiUrl;

@Injectable({providedIn: "root"})
export class DieticianService {

  constructor(private _http: HttpClient) {
  }

  register(param: HttpParams): Observable<any> {
    return this._http.post(`${api}registerDietician`, param, {withCredentials: true});
  }

  login(param: HttpParams): Observable<any> {
    return this._http.post(`${api}loginDietician`, param, {withCredentials: true});
  }

  fetchDieticianAppointment(status: string) {
    const userid: any = sessionStorage.getItem("healthify.dietician.userid");
    const param = new HttpParams()
      .append("dieticianId", `${userid}`)
      .append("statusName", `${status}`);
    return this._http.get(`${api}fetchDieticianAppointment`, {params: param, withCredentials: true});
  }

  saveAppointmentAction(params: HttpParams): Observable<any> {
    return this._http.post(`${api}saveAppointmentAction`, params, {withCredentials: true});
  }

  saveUserDietWorkData(params: HttpParams): Observable<any> {
    return this._http.post(`${api}saveUserDietWorkData`, params, {withCredentials: true});
  }

  fetchDieticianWorkOutData() {
    const userid: any = sessionStorage.getItem("healthify.dietician.userid");
    const param = new HttpParams()
      .append("dieticianId", `${userid}`);
    return this._http.get(`${api}fetchDieticianWorkOutData`, {params: param, withCredentials: true});
  }


}
