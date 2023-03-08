import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PackageService} from './package.service';
import {Package} from "./package";
import {ConfirmationService} from "primeng/api";
import {
  NgxScannerQrcodeComponent,
  NgxScannerQrcodeService,
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  ScannerQRCodeSelectedFiles
} from "ngx-scanner-qrcode";
import {PackageWarehouseInventory} from "../packageWarehouseInventory/package-warehouse-inventory";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  public config: ScannerQRCodeConfig = {
    // fps: 1000,
    vibrate: 400,
    // isBeep: true,
    // decode: 'macintosh',
    deviceActive: 1,
    constraints: {
      audio: false,
      video: {
        width: window.innerWidth
      }
    }
  };

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  public qrCodeResult2: ScannerQRCodeSelectedFiles[] = [];

  @ViewChild('action') action: NgxScannerQrcodeComponent;

  ngAfterContentInit(): void {
    setTimeout(() => this.action.start(), 1000);
  }

  public onEvent(e: ScannerQRCodeResult[]): void {
    console.log(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, alert);
  }

  public onDowload(action): void {
    action.download().subscribe(console.log, alert);
  }

  public onSelects(files: any): void {
    this.qrcode.loadFiles(files).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
    });
  }

  public onSelects2(files: any): void {
    this.qrcode.loadFilesToScan(files, this.config).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      console.log(res);
      this.qrCodeResult2 = res;
    });
  }

  public packages?: Package[];
  public newPackage?: Package;
  public editMode = false;
  @Output() selectedPackage: EventEmitter<Package> = new EventEmitter();
  @Output() finishedPackaging: EventEmitter<Package> = new EventEmitter();
  @Output() checkSelectedWarehouseInventory: EventEmitter<string> = new EventEmitter();
  public selectedPackageId = '';

  constructor(
    private qrcode: NgxScannerQrcodeService,
    private packageService: PackageService,
    private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {
    this.onLoad();
  }

  private onLoad() {
    this.packageService.getAllPackage().subscribe(packages => {
      if (packages.length > 0) {
        this.packages = packages;
      } else {
        this.editMode = true;
      }
    });
  }

  selectPackage(entity: Package) {
    entity.isSelected = true;
    this.selectedPackageId = entity.id;
    this.selectedPackage.emit(entity);
  }

  cancelPackaging(entity: Package) {
    entity.isSelected = false;
    this.selectedPackageId = '';
    this.selectedPackage.emit(new Package());
  }

  finishPackaging(entity: Package) {
    this.confirmationService.confirm({
      message: 'آیا با اتمام بسته بندی موافق هستید؟',
      // header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.finishedPackaging.emit(entity);
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      },
      reject: () => {
        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
    // this.checkSelectedWarehouseInventory.emit('');
  }

  createNewPackage() {
    this.newPackage = new Package();
    this.newPackage.status = true;
    this.packageService.savePackage(this.newPackage).subscribe(newPackage => {
      this.onLoad();
      console.log(newPackage);
    });
  }

  addWarehouseInventoryToPackage(packageId: string, warehouseInventoryId: string) {
    let packageWarehouseInventory: PackageWarehouseInventory = {
      packageId: packageId,
      warehouseInventoryId: warehouseInventoryId
    }
    this.packageService.addWarehouseInventoryToPackage(packageWarehouseInventory).subscribe(result => {
      console.log(result);
    });
  }
}
