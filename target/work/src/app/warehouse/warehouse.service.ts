import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Warehouse} from './warehouse';
import {Observable} from 'rxjs';
import {BaseService} from '../general/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService extends BaseService {

  private warehouseUrl = this.baseUrl + 'rest/warehouse';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllWarehouses(): Observable<Warehouse[]> {
    return this.httpClient.get<Warehouse[]>(`${this.warehouseUrl}/getAll`);
  }

  loadWarehouse(warehouseId: string): Observable<Warehouse> {
    return this.httpClient.get<Warehouse>(`${this.warehouseUrl}/load/${warehouseId}`);
  }

  // tslint:disable-next-line:ban-types
  saveWarehouse(warehouse: Warehouse): Observable<Object> {
    return this.httpClient.post(`${this.warehouseUrl}/save`, warehouse);
  }

  deleteWarehouse(warehouse: Warehouse): Observable<any> {
    return this.httpClient.delete(`${this.warehouseUrl}/delete/${warehouse.id}`);
  }
}
