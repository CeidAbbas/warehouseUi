import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Warehouse} from './warehouse';
import {WarehouseService} from './warehouse.service';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {

  public warehouse: Warehouse;
  public editLoadId?: string;
  @Input() public warehouseId = '';
  @Output() public editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  showHideLoaderFlag = false;

  // @ViewChild('jqxLoader', {static: false}) jqxLoader: jqxLoaderComponent;

  constructor(
    private warehouseService: WarehouseService
  ) {
    // @ts-ignore
    // this.jqxLoader = new jqxLoaderComponent();
    // tslint:disable-next-line:new-parens
    this.warehouse = new Warehouse;
  }

  ngOnInit(): void {
    // tslint:disable-next-line:triple-equals
    if (this.warehouseId != '') {
      this.onLoad();
    }
  }

  // tslint:disable-next-line:typedef
  onLoad() {
    this.warehouse = new Warehouse();
    this.warehouseService.loadWarehouse(this.warehouseId).subscribe(warehouse => {
      this.warehouse = warehouse;
    });
  }

  // tslint:disable-next-line:typedef
  save() {
    this.showHideLoader();
    this.warehouseService.saveWarehouse(this.warehouse).subscribe(data => {
      // tslint:disable-next-line:label-position
      success: {
        this.switchToGrid();
      }
      // tslint:disable-next-line:label-position
      final: {
        // setTimeout(() => {
        //   this.showHideLoader();
        // },5000);
      }
    });
  }

  // tslint:disable-next-line:typedef
  switchToGrid() {
    this.warehouse = new Warehouse();
    this.editModeEmitter.emit(false);
  }

  // tslint:disable-next-line:typedef
  showHideLoader() {
    console.log('show');
    // this.jqxLoader.open();
    // this.showHideLoaderFlag ? this.jqxLoader?.open() : this.jqxLoader?.close();
  }
}
