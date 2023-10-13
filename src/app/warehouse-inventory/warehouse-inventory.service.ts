import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {WarehouseInventory} from './warehouse-inventory';
import {Observable} from 'rxjs';
import {BaseService} from '../general/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class WarehouseInventoryService extends BaseService {

  warehouseInventoryUrl = this.baseUrl + 'rest/warehouseInventory';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllWarehouseInventory(): Observable<WarehouseInventory[]> {
    return this.httpClient.get<WarehouseInventory[]>(`${this.warehouseInventoryUrl}/getAll`);
  }

  getByWarehouseId(warehouseId: string): Observable<WarehouseInventory[]> {
    return this.httpClient.get<WarehouseInventory[]>(`${this.warehouseInventoryUrl}/getByWarehouseId/${warehouseId}`);
  }

  loadWarehouseInventory(warehouseInventoryId: string): Observable<WarehouseInventory[]> {
    return this.httpClient.get<WarehouseInventory[]>(`${this.warehouseInventoryUrl}/load/${warehouseInventoryId}`);
  }

  saveWarehouseInventory(warehouseInventory: WarehouseInventory, file?: FormData): Observable<WarehouseInventory> {
    return this.httpClient.post<WarehouseInventory>(`${this.warehouseInventoryUrl}/save`, file);
  }

  // @ts-ignore
  saveWarehouseInventoryFile(file?: FormData, warehouseInventory: WarehouseInventory): Observable<WarehouseInventory> {
    return this.httpClient.post<WarehouseInventory>(`${this.warehouseInventoryUrl}/saveFile/${warehouseInventory.id}`, file);
  }

  deleteWarehouseInventory(warehouseInventory: WarehouseInventory): Observable<any> {
    return this.httpClient.delete(`${this.warehouseInventoryUrl}/delete/${warehouseInventory.id}`);
  }

  getImage(warehouseInventoryId: string) {
    return this.httpClient.get<any[]>(`${this.warehouseInventoryUrl}/getImage/${warehouseInventoryId}`);
  }
}
