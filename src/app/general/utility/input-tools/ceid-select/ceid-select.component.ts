import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CeidSelectService} from "./ceid-select.service";

@Component({
  selector: 'ceid-select',
  templateUrl: './ceid-select.component.html',
  styleUrls: ['./ceid-select.component.css']
})
export class CeidSelectComponent<M> implements OnInit {

  public models?: M[] | any= [];
  @Input() selectClass: string = '';
  @Input() rest: string = '';
  @Input() isBaseInformation = false;
  @Input() titleName = '';
  @Input() parent = '';
  @Input() selected = '';
  @Input() selectValue: any;
  @Output() sendValue: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private ceidSelectService: CeidSelectService,
  ) {
  }

  ngOnInit(): void {
    console.log(this.selected);
    if (this.isBaseInformation) {
      this.ceidSelectService.getBaseInformationData(this.rest).subscribe(res => {
        this.models = res.filter((model: { parent: string; }) => {
          return model.parent == this.parent;
        });
      });
    } else {
      this.ceidSelectService.getData(this.rest).subscribe(res => {
        this.models = res;
      });
    }
  }

  onChange() {
    this.sendValue.emit(this.selectValue);
  }
}
