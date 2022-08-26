import {Injectable} from '@angular/core';
import {BaseService} from "../general/service/base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Warehouse} from "../warehouse/warehouse";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  public loginUrl: string = this.baseUrl + 'rest/login';

  constructor(private httpClient: HttpClient) {
    super();
  }

  checkConnection(): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.loginUrl}/checkConnection`);
  }
}
