import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {WarehouseResponsible} from './warehouse-responsible';
import {Observable} from 'rxjs';
import {BaseService} from '../general/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class WarehouseResponsibleService extends BaseService {

  public warehouseResponsibleUrl = this.baseUrl + 'rest/warehouseResponsible';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllWarehouseResponsible(): Observable<WarehouseResponsible[]> {
    return this.httpClient.get<WarehouseResponsible[]>(`${this.warehouseResponsibleUrl}/getAll`);
  }

  loadWarehouseResponsible(warehouseResponsibleId: string): Observable<WarehouseResponsible> {
    return this.httpClient.get<WarehouseResponsible>(`${this.warehouseResponsibleUrl}/load/${warehouseResponsibleId}`);
  }

  saveWarehouseResponsible(warehouseResponsible: WarehouseResponsible): Observable<Object> {
    return this.httpClient.post<Object>(`${this.warehouseResponsibleUrl}/save`, warehouseResponsible);
  }

  deleteWarehouseResponsible(warehouseResponsible: WarehouseResponsible): Observable<any> {
    return this.httpClient.delete(`${this.warehouseResponsibleUrl}/delete/${warehouseResponsible.id}`);
  }
}
