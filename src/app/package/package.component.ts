import {AfterContentInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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
import {PackageWarehouseInventoryService} from "../packageWarehouseInventory/package-warehouse-inventory.service";
import {OverlayPanel} from "primeng/overlaypanel";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit, AfterContentInit {

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
        width: 300
      }
    }
  };

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  public qrCodeResult2: ScannerQRCodeSelectedFiles[] = [];

  @ViewChild('action') action: NgxScannerQrcodeComponent = new NgxScannerQrcodeComponent();

  public packages?: Package[];
  public newPackage?: Package;
  public editMode = false;
  @Output() selectedPackage: EventEmitter<Package> = new EventEmitter();
  @Output() finishedPackaging: EventEmitter<Package> = new EventEmitter();
  @Output() checkSelectedWarehouseInventory: EventEmitter<string> = new EventEmitter();
  public selectedPackageId = '';
  public selectedPackageWarehouseInventoryId = '';
  public sendToPackage = true;
  packageWarehouseInventory: PackageWarehouseInventory[] = [];
  selectedProduct: any;
  isCameraSearch: boolean = false;
  isCameraFree: boolean = false;

  constructor(
    private qrcode: NgxScannerQrcodeService,
    private packageService: PackageService,
    private confirmationService: ConfirmationService,
    private packageWarehouseInventoryService: PackageWarehouseInventoryService,
  ) {
  }

  ngAfterContentInit(): void {
    // if (this.action != undefined) { // @ts-ignore
    //   setTimeout(() => this.action.start(), 1000);
    // }
  }

  public onEvent(e: ScannerQRCodeResult[]): void {
    if (e.length > 0 && this.selectedPackageWarehouseInventoryId != e[0].value) {
      this.selectedPackageWarehouseInventoryId = e[0].value;
      if (this.isCameraSearch) {
        // this.packageWarehouseInventoryService.getPackageWarehouseInventory(this.selectedPackageWarehouseInventoryId).subscribe(result => {
        this.packageService.loadPackage(this.selectedPackageWarehouseInventoryId).subscribe(result => {
          this.packages = [];
          this.packages.push(result);
        });
      } else if (this.sendToPackage && this.selectedPackageId != '') {
        this.addWarehouseInventoryToPackage(this.selectedPackageId, this.selectedPackageWarehouseInventoryId);
        this.sendToPackage = false;
      }
      // this.action.stop();
    }
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, alert);
  }

  public onDowload(action: any): void {
    action.download().subscribe(console.log, alert);
  }

  public onSelects(files: any): void {
    this.qrcode.loadFiles(files).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
    });
  }

  public onSelects2(files: any): void {
    this.qrcode.loadFilesToScan(files, this.config).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult2 = res;
    });
  }

  ngOnInit(): void {
    this.onLoad();
  }

  getPackageWarehouseInventory(packageWarehouseInventoryId: string = ''): void {
    this.packageWarehouseInventoryService.getPackageWarehouseInventory(packageWarehouseInventoryId).subscribe(value => {
      this.packageWarehouseInventory = value;
    });
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
    // entity.isSelected = true;
    if (entity.id != undefined) {
      this.selectedPackageId = entity.id;
    }
    this.isCameraSearch = false;
    this.isCameraFree = true;
    // this.selectedPackage.emit(entity);
    // if (this.action != undefined) { // @ts-ignore
    //   setTimeout(() => this.action.start(), 1000);
    // }
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
        entity.status = false;
        this.packageService.savePackage(entity).subscribe(value => {
          this.onLoad();
        });
        // this.packageService.
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
    });
  }

  addWarehouseInventoryToPackage(packageId: string, warehouseInventoryId: string) {
    let packageWarehouseInventory: PackageWarehouseInventory = {
      packageId: packageId,
      warehouseInventoryId: warehouseInventoryId
    }
    this.packageService.addWarehouseInventoryToPackage(packageWarehouseInventory).subscribe(result => {
      this.sendToPackage = false;
    }, error => {
      this.sendToPackage = true;
    });
  }

  onRowSelect($event: any) {

  }

  cameraSearch() {
    this.selectedPackageId = '';
    this.isCameraSearch = true;
    this.isCameraFree = true;
  }

  getPackages() {
    this.packageService.getAllPackage().subscribe(results => {
      this.packages = results;
    })
  }

  printQrCode() {

  }

  public printConfig = {
    printMode: 'template',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=330,left=520,fullscreen=yes',
    pageTitle: '',
    templateString: '<header class="print-none">I\'m part of the template header</header>{{printBody}}<footer class="print-none">I\'m part of the template footer</footer>',
    stylesheets: [{rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'}],
    styles: [
      'td { border: 1px solid black; color: green; }',
      'table { border: 1px solid black; }',
      'header, table, footer { margin: auto; text-align: center; }',
      'header {font-weight: bold}',
    ]
  }
}
