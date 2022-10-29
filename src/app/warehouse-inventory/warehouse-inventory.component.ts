import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WarehouseInventory} from "./warehouse-inventory";
import {WarehouseInventoryService} from './warehouse-inventory.service';
import {PackageComponent} from "../package/package.component";
import {Package} from "../package/package";
import {Message} from "primeng/api";
import {PackageWarehouseInventoryService} from "../packageWarehouseInventory/package-warehouse-inventory.service";
import {PackageWarehouseInventory} from "../packageWarehouseInventory/package-warehouse-inventory";

@Component({
  selector: 'app-warehouse-inventory',
  templateUrl: './warehouse-inventory.component.html',
  styleUrls: ['./warehouse-inventory.component.css']
})
export class WarehouseInventoryComponent implements OnInit {

  public warehouseInventories?: WarehouseInventory[];
  public warehouseInventoriesTemp: WarehouseInventory[] = [];
  public title = 'موجودی';
  public editMode = false;
  public showPackages = false;
  @Input() warehouseTitle = 'تمام انبارها';
  @Input() public warehouseId = '';
  @Input() originLocation = '';
  @ViewChild('packageComponent') public packageComponent: PackageComponent;
  public selectedWare;
  public selectedPackageColor = '';
  public selectedPackage?: Package;
  public message: Message[];

  constructor(
    private warehouseInventoryService: WarehouseInventoryService,
    private packageWarehouseInventoryService: PackageWarehouseInventoryService,
  ) {
  }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    if (this.warehouseId != "")
      this.warehouseInventoryService.getByWarehouseId(this.warehouseId).subscribe(warehouseInventories => {
        this.warehouseInventories = warehouseInventories;
      });
    else
      this.warehouseInventoryService.getAllWarehouseInventory().subscribe(warehouseInventories => {
        this.warehouseInventories = warehouseInventories;
      });
  }

  reload() {
    this.onLoad();
  }

  openPackage() {
    this.showPackages = !this.showPackages;
  }

  addToPackage() {
    let warehouseInventoryIds = [];
    this.warehouseInventories.forEach((warehouseInventory) => {
      if (warehouseInventory.isSelected)
        warehouseInventoryIds.push(warehouseInventory.id);
    });
    console.log(warehouseInventoryIds);
    if (this.packageComponent.editMode)
      console.log(warehouseInventoryIds.toString());
    console.log(this.packageComponent.editMode);
  }

  getPackage($event: Package) {
    this.selectedPackage = $event;
    this.selectedPackageColor = this.selectedPackage.color;
  }

  finishedPackaging($event: Package) {
    let selectedWarehouseInventory: WarehouseInventory[];
    selectedWarehouseInventory = this.warehouseInventories.filter(warehouseInventory => {
      return warehouseInventory.isSelected;
    });
    if (selectedWarehouseInventory.length > 0) {
      this.message = [{severity: 'info', summary: '', detail: 'به بسته بندی کالا اضافه کردید'}];
      setTimeout(() => {
          this.message = [];
        }, 3000
      );
      let packageWarehouseInventory: PackageWarehouseInventory[] = [];
      let entity: PackageWarehouseInventory;
      selectedWarehouseInventory.forEach(warehouseInventory => {
        entity = new PackageWarehouseInventory();
        entity.warehouseInventoryId = warehouseInventory.id;
        entity.packageId = this.selectedPackage.id;
        packageWarehouseInventory.push(entity);
      });
      this.packageWarehouseInventoryService.savePackageWarehouseInventory(packageWarehouseInventory).subscribe(res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.message = [{severity: 'warn', summary: '', detail: 'شما هیچ کالایی را انتخاب نکردید'}];
      // setTimeout(() => {
      //     this.message = [];
      //   }, 3000
      // );
    }
  }
}
