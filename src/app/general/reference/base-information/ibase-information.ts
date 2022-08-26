export class IBaseInformation {
  constructor(
    id?: string,
    label?: string,
    items?: IBaseInformation[],
    expanded?: boolean,
    selected?: boolean,
    icon?: string,
    iconsize?: number,
  ) {
    label = '';
  }
}
