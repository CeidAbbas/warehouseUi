import {BaseModel} from '../general/model/base-model';

export class PackageWarehouseInventory extends BaseModel {
  constructor(
    public packageId?: string,
    public warehouseInventoryId?: string,
  ) {
    super();
  }
}
