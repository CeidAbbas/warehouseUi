import {BaseModel} from "../general/model/base-model";

export class Forwarding extends BaseModel {
  constructor(
    public transporterId?: string,
    public transporterFullName?: string,
    public warehouseId?: string,
    public warehouseName?: string,
    public packagesId?: string,
    public packagesBarcode?: string,
    public packagesColor?: string,
    public carrierId?: string,
    public carrierTitle?: string,
    public receiverId?: string,
    public receiverFullName?: string,
    public transportDate?: string,
    public receiveDate?: string,
    public receiveReport?: string,
    public description?: string,
    public carrierNumber?: string,
  ) {
    super();
  }
}
