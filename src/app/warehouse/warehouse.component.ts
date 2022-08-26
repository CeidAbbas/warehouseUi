import {Component, Input, OnInit} from '@angular/core';
import {Warehouse} from './warehouse';
import {WarehouseService} from './warehouse.service';
import {WareService} from '../ware/ware.service';
import {Ware} from '../ware/ware';
import {WarehouseInventory} from '../warehouse-inventory/warehouse-inventory';
import {WarehouseInventoryService} from '../warehouse-inventory/warehouse-inventory.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  public warehouses?: Warehouse[];
  public warehousesFiltered?: Warehouse[];
  public warehouseInventories: WarehouseInventory[] = [];
  public warehouseSearch?: Warehouse;
  public wares?: Ware[];
  public title = 'انبار';
  public warehouseTitle = 'بهار';
  @Input() sourceLoad = true;
  public editModeTitle = 'ویرایش انبار';
  public editMode = false;
  public editLoadId = '';
  public importDiv = false;
  public exportDiv = false;
  public showInventory = false;
  public warehouseId = '';
  public modalHeader = '';

  constructor(
    private warehouseService: WarehouseService,
    private warehouseInventoryService: WarehouseInventoryService,
    private wareService: WareService,
  ) {
  }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(): void {
    this.warehouseService.getAllWarehouses().subscribe(warehouses => {
      this.warehouses = warehouses;
    });
  }

  reload(): void {
    this.editMode ? console.log('if') : this.onLoad();
  }

  editModeBack($event: any): void {
    this.editLoadId = '';
    this.editMode = $event;
    this.onLoad();
  }

  deleteWarehouse(warehouse: Warehouse): void {
    this.warehouseService.deleteWarehouse(warehouse).subscribe(data => {
      this.onLoad();
    });
  }

  switchToEditMode(loadId: string): void {
    this.editLoadId = loadId;
    this.editModeTitle = 'تعریف انبار جدید';
    this.editMode = true;
  }

  importWare(warehouseId: string): void {
    this.warehouseId = warehouseId;
    this.wareService.getAllWare().subscribe(wares => {
      this.wares = wares;
    });
    this.exportDiv = false;
    this.showInventory = false;
    this.importDiv = !this.importDiv;
    this.modalHeader = 'ثبت کالای ورودی';
  }

  exportWare(warehouseId: string): void {
    this.warehouseId = warehouseId;
    this.importDiv = false;
    this.showInventory = false;
    this.exportDiv = !this.exportDiv;
    if (this.exportDiv) {
      this.warehouseInventoryService.getByWarehouseId(warehouseId).subscribe(warehouseInventories => {
        this.warehouseInventories = warehouseInventories;
        this.warehousesFiltered = this.warehouses.filter(warehouse => {
          return warehouse.id !== warehouseId;
        });
      });
      this.modalHeader = 'خروج کالا از انبار';
    }
  }

  switchToInventory(warehouseId: string): void {
    this.warehouseId = warehouseId;
    this.importDiv = false;
    this.exportDiv = false;
    this.showInventory = !this.showInventory;
    this.modalHeader = 'نمایش کالا';
  }

  closeModal(): void {
    this.importDiv = false;
    this.exportDiv = false;
    this.showInventory = this.showInventory = false;
  }

  backFromWarehouseInventory($event: any): void {
    if ($event) {
      this.importDiv = this.importDiv = false;
      this.exportDiv = this.exportDiv = false;
    }
  }
}
