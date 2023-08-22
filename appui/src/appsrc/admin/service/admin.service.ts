import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const api = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class AdminService {

  constructor(private _http: HttpClient) {
  }

  login(param: HttpParams): Observable<any> {
    return this._http.post(`${api}loginAdmin`, param, {withCredentials: true});
  }

  fetchUserList(): Observable<any> {
    return this._http.get(`${api}fetchUserDataList`, {withCredentials: true});
  }

  fetchDieticianList(): Observable<any> {
    return this._http.get(`${api}fetchDieticianDataList`, {withCredentials: true});
  }

  registerUser(param: HttpParams): Observable<any> {
    return this._http.post(`${api}registerUser`, param, {withCredentials: true});
  }

  deleteUser(id: any): Observable<any> {
    const param = new HttpParams().append("userId", `${id}`);
    return this._http.post(`${api}deleteUser`, param, {withCredentials: true});
  }

  registerDietician(param: HttpParams): Observable<any> {
    return this._http.post(`${api}registerDietician`, param, {withCredentials: true});
  }

  deleteDietician(id: any): Observable<any> {
    const param = new HttpParams().append("dieticianId", `${id}`);
    return this._http.post(`${api}deleteDietician`, param, {withCredentials: true});
  }

  fetchAllAppointment(): Observable<any> {
    return this._http.get(`${api}fetchAllAppointment`, {withCredentials: true});
  }

}
