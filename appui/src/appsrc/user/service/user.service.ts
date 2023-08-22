import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const api = environment.apiUrl;

@Injectable({providedIn: "root"})
export class UserService {

  constructor(private _http: HttpClient) {
  }

  login(param: HttpParams): Observable<any> {
    return this._http.post(`${api}loginUser`, param, {withCredentials: true});
  }

  register(param: HttpParams): Observable<any> {
    return this._http.post(`${api}registerUser`, param, {withCredentials: true});
  }

  fetchDietician(): Observable<any> {
    return this._http.get(`${api}fetchDietician`, {withCredentials: true});
  }

  postAppointment(param: HttpParams): Observable<any> {
    return this._http.post(`${api}postAppointment`, param, {withCredentials: true});
  }

  fetchAppointment() {
    const userid: any = sessionStorage.getItem("healthify.user.userid");
    const param = new HttpParams().append("userId", `${userid}`);
    return this._http.get(`${api}fetchAppointment`, {params: param, withCredentials: true});
  }

  fetchDietWorkData() {
    const userid: any = sessionStorage.getItem("healthify.user.userid");
    const param = new HttpParams().append("userId", `${userid}`);
    return this._http.get(`${api}fetchUserWorkOutData`, {params: param, withCredentials: true});
  }

}
