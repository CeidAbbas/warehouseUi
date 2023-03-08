import {BaseModel} from "../general/model/base-model";

export class ForwardingPackage extends BaseModel {

  constructor(
    public forwardingId?: string,
    public packageId?: string,
  ) {
    super();
  }
}
