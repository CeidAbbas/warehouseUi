import {Injectable} from '@angular/core';
import {BaseService} from "../general/service/base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WarehouseInventory} from "../warehouse-inventory/warehouse-inventory";
import { PackageWarehouseInventory } from './package-warehouse-inventory';

@Injectable({
  providedIn: 'root'
})
export class PackageWarehouseInventoryService extends BaseService {
  private packageWarehouseInventoryUrl = this.baseUrl + 'rest/packageWarehouseInventory';

  constructor(private httpClient: HttpClient) {
    super();
  }


  getAllPackageWarehouseInventory(): Observable<WarehouseInventory[]> {
    return this.httpClient.get<WarehouseInventory[]>(`${this.packageWarehouseInventoryUrl}/getAll`);
  }

  // getByWarehouseId(warehouseId: string): Observable<WarehouseInventory[]> {
  //   return this.httpClient.get<WarehouseInventory[]>(`${this.warehouseInventoryUrl}/getByWarehouseId/${warehouseId}`);
  // }

  getPackageWarehouseInventory(packageWarehouseInventoryId: string): Observable<PackageWarehouseInventory[]> {
    return this.httpClient.get<PackageWarehouseInventory[]>(`${this.packageWarehouseInventoryUrl}/load/${packageWarehouseInventoryId}`);
  }

  savePackageWarehouseInventory(packageWarehouseInventory: PackageWarehouseInventory[]): Observable<PackageWarehouseInventory[]> {
    return this.httpClient.post<PackageWarehouseInventory[]>(`${this.packageWarehouseInventoryUrl}/save`, packageWarehouseInventory);
  }

  // deleteWarehouseInventory(warehouseInventory: WarehouseInventory): Observable<any> {
  //   return this.httpClient.delete(`${this.warehouseInventoryUrl}/delete/${warehouseInventory.id}`);
  // }
}
