import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ware} from './ware';
import {BaseInformation} from '../general/reference/base-information/base-information';
import {BaseService} from '../general/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class WareService extends BaseService {

  private wareUrl = this.baseUrl + 'rest/ware';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllWare(): Observable<Ware[]> {
    return this.httpClient.get<Ware[]>(`${this.wareUrl}/getAll`);
  }

  loadWare(wareId: string): Observable<Ware> {
    return this.httpClient.get<Ware>(`${this.wareUrl}/load/${wareId}`);
  }

  // tslint:disable-next-line:ban-types
  saveWare(ware: Ware): Observable<Object> {
    return this.httpClient.post(`${this.wareUrl}/save`, ware);
  }

  deleteWare(ware: Ware): Observable<any> {
    return this.httpClient.delete(`${this.wareUrl}/delete/${ware.id}`);
  }

  getAllBaseInformation(): Observable<BaseInformation[]> {
    return this.httpClient.get<BaseInformation[]>(`${this.baseUrl}rest/baseInformation/getAll`);
  }
  // getBaseInformationById(baseInformationId: string): Observable<BaseInformation[]> {
  //   return this.httpClient.get<BaseInformation[]>(`${this.baseUrl}rest/baseInformation/getBaseInformationById`);
  // }
}
