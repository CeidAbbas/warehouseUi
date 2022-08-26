import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseInformation} from './base-information';
import {Observable} from 'rxjs';
import {BaseService} from '../../service/base.service';

@Injectable({
  providedIn: 'root'
})
export class BaseInformationService extends BaseService{

  private baseInformationUrl = this.baseUrl + 'rest/baseInformation';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllBaseInformation(): Observable<BaseInformation[]> {
    return this.httpClient.get<BaseInformation[]>(`${this.baseInformationUrl}/getAll`);
  }

  loadBaseInformation(baseInformationId: string): Observable<BaseInformation> {
    return this.httpClient.get<BaseInformation>(`${this.baseInformationUrl}/load/${baseInformationId}`);
  }

  saveBaseInformation(baseInformation: BaseInformation): Observable<BaseInformation> {
    return this.httpClient.post(`${this.baseInformationUrl}/save`, baseInformation);
  }

  deleteBaseInformation(baseInformation: BaseInformation): Observable<any> {
    return this.httpClient.delete(`${this.baseInformationUrl}/delete/${baseInformation.id}`);
  }
}
