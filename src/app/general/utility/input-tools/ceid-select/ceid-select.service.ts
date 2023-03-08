import {Injectable} from '@angular/core';
import {BaseService} from "../../../service/base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CeidSelectService extends BaseService {

  constructor(
    private httpClient: HttpClient,
  ) {
    super();
  }

  getData(rest: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${rest}`)
  }

  getBaseInformationData(rest: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${rest}`)
  }
}
