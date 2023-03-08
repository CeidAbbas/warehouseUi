import {Injectable} from '@angular/core';
import {BaseService} from "../general/service/base.service";
import {HttpClient} from "@angular/common/http";
import { Package } from './package';
import {Observable} from "rxjs";
import {PackageWarehouseInventory} from "../packageWarehouseInventory/package-warehouse-inventory";

@Injectable({
  providedIn: 'root'
})
export class PackageService extends BaseService {

  packageUrl = this.baseUrl + 'rest/package';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllPackage(): Observable<Package[]> {
    return this.httpClient.get<Package[]>(`${this.packageUrl}/getAll`);
  }

  savePackage(packageEntry: Package): Observable<Package> {
    return this.httpClient.post<Package>(`${this.packageUrl}/save`, packageEntry);
  }

  addWarehouseInventoryToPackage(packageWarehouseInventory: PackageWarehouseInventory): Observable<PackageWarehouseInventory> {
    return this.httpClient.post<PackageWarehouseInventory>(`${this.packageUrl}/savePackageWarehouseInventory`, packageWarehouseInventory);
  }
}
