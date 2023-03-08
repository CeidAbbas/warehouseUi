import {BaseModel} from '../general/model/base-model';

export class Package extends BaseModel {
  constructor(
    public barcode?: string,
    public color?: string,
    public status?: boolean,
    public isSelected = false,
  ) {
    super();
  }
}
