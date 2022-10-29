import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseInformation} from './base-information';
import {Observable} from 'rxjs';
import {BaseService} from '../../service/base.service';
import {TreeNode} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class BaseInformationService extends BaseService {

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

  saveBaseInformation(baseInformation: BaseInformation, parent: string): Observable<BaseInformation> {
    return this.httpClient.post(`${this.baseInformationUrl}/save/${parent}`, baseInformation);
  }

  deleteBaseInformation(baseInformation: BaseInformation): Observable<any> {
    return this.httpClient.delete(`${this.baseInformationUrl}/delete/${baseInformation.id}`);
  }

  getFiles(): any {
    return this.httpClient.get<any>('assets/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }
}
