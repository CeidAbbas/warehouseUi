import {BaseModel} from '../general/model/base-model';

export class WarehouseInventory extends BaseModel {
  constructor(
    public warehouseId?: string,
    public warehouseTitle?: string,
    public warehouseDestinationId?: string,
    public warehouseDestinationTitle?: string,
    public warehouseInventoryFile?: File,
    public wareId?: string,
    public wareName?: string,
    public producerId?: string,
    public producerName?: string,
    public forwardingId?: string,
    public referenceId?: string,
    public warehouseHealthyStatusId?: string,
    public warehouseHealthyStatusTitle?: string,
    public deliveryHealthyStatusId?: string,
    public deliveryHealthyStatusTitle?: string,
    public buyOriginId?: string,
    public buyOriginTitle?: string,
    public entryDate?: string,
    public exitDate?: string,
    public serial?: string,
    public contractNumber?: string,
    public barcode?: string,
    public description?: string,
    public color?: string,
    public expirationDate?: string,
    public appurtenance?: string,
    public isSelected?: boolean,
  ) {
    super();
  }
}
