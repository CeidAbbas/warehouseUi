import {Component, OnInit, ViewChild} from '@angular/core';
import {Forwarding} from "./forwarding";
import {ForwardingService} from './forwarding.service';
import {
  NgxScannerQrcodeComponent,
  NgxScannerQrcodeService,
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  ScannerQRCodeSelectedFiles
} from "ngx-scanner-qrcode";
import {ForwardingPackage} from "../forwardingPackge/forwardingPackage";
import {PackageService} from "../package/package.service";
import {PackageWarehouseInventory} from "../packageWarehouseInventory/package-warehouse-inventory";
import {WarehouseInventory} from "../warehouse-inventory/warehouse-inventory";

@Component({
  selector: 'app-forwarding',
  templateUrl: './forwarding.component.html',
  styleUrls: ['./forwarding.component.css']
})
export class ForwardingComponent implements OnInit {
  forwardings: Forwarding[] = [];
  editMode = false;
  title: string = '';
  isCameraFree = false;
  forwardingTitle = 'ارسال بسته بندی';
  editModeTitle = 'ثبت ارسال بسته بندی';
  editLoadId: any;
  id = '0cd673ef3d3c43bcb52a254175a7f751';
  selectedPackageId = '';
  selectedForwarding = '';

  public config: ScannerQRCodeConfig = {
    // fps: 1000,
    vibrate: 400,
    // isBeep: true,
    // decode: 'macintosh',
    deviceActive: 1,
    constraints: {
      audio: false,
      video: {
        width: 300
      }
    }
  };

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  public qrCodeResult2: ScannerQRCodeSelectedFiles[] = [];
  @ViewChild('action') action: NgxScannerQrcodeComponent = new NgxScannerQrcodeComponent();
  @ViewChild('op2') op2: any;
  forwardingPackages: ForwardingPackage[] = [];
  warehouseInventories: any[] = [];
  selectedProduct: any;
  isCameraSearch: boolean = false;

  constructor(
    private qrCode: NgxScannerQrcodeService,
    private forwardingService: ForwardingService,
    private packageService: PackageService,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.forwardingService.getAllForwarding().subscribe(forwarding => {
      this.forwardings = forwarding;
    });
  }

  switchToEditMode(id?: any) {
  }

  editModeBack($event: boolean) {
    this.editMode = $event;
    if (!this.editMode)
      this.loadData();
  }

  reload() {
    this.loadData();
  }

  ngAfterContentInit(): void {
    // if (this.action != undefined) { // @ts-ignore
    //   setTimeout(() => this.action.start(), 1000);
    // }
  }

  public onEvent(e: ScannerQRCodeResult[]): void {
    if (e.length > 0 && this.selectedPackageId != e[0].value && this.selectedForwarding != null) {
      this.selectedPackageId = e[0].value;
      if (this.isCameraSearch)
        this.forwardingService.loadForwarding(this.selectedPackageId).subscribe(result => {
          this.forwardings = [];
          this.forwardings.push(result);
        });
      else
        this.addPackageToForwarding(this.selectedPackageId, this.selectedForwarding);
    }
  }

  private addPackageToForwarding(selectedPackageId: string, selectedForwarding: string) {
    let forwardingPackage: ForwardingPackage = {
      forwardingId: selectedForwarding,
      packageId: selectedPackageId
    }
    this.forwardingService.addPackageToForwarding(forwardingPackage).subscribe(result => {
    });
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, alert);
  }

  public onDowload(action: any): void {
    action.download().subscribe(console.log, alert);
  }

  public onSelects(files: any): void {
    this.qrCode.loadFiles(files).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
    });
  }

  public onSelects2(files: any): void {
    this.qrCode.loadFilesToScan(files, this.config).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult2 = res;
    });
  }

  selectForwarding(forwardingId: string = '') {
    this.selectedForwarding = forwardingId;
    this.isCameraSearch = false;
    this.isCameraFree = true;
  }

  getForwardingPackage(forwardingId?: string) {
    this.forwardingService.getForwardingPackage(forwardingId).subscribe(value => {
      this.forwardingPackages = value;
    });
  }

  onRowSelect($event: any) {

  }

  cameraSearch() {
    this.selectedForwarding = '';
    this.isCameraSearch = true;
    this.isCameraFree = true;
  }

  showDetails(packageId: string, $event: any) {
    this.packageService.getAllPackageWarehouseInventoryByPackage(packageId).subscribe(result => {
      this.warehouseInventories = result;
      this.op2.toggle($event);
    });
  }
}
