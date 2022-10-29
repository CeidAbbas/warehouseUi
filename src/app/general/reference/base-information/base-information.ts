import {BaseModel} from "../../model/base-model";

export class BaseInformation extends BaseModel {
  constructor(
    public label?: string,
    public icon?: string,
    public collapsedIcon?: string,
    public expandedIcon?: string,
    public hierarchy?: string,
    public children?: BaseInformation[],
    public parent?: string
  ) {
    super();
  }
}
