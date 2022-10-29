import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PackageService} from './package.service';
import {Package} from "./package";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  public packages?: Package[];
  public editMode = false;
  @Output() selectedPackage: EventEmitter<Package> = new EventEmitter();
  @Output() finishedPackaging: EventEmitter<Package> = new EventEmitter();
  @Output() checkSelectedWarehouseInventory: EventEmitter<string> = new EventEmitter();
  public selectedPackageId = '';

  constructor(
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
        console.log(this.packages);
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
    console.log('finishPackaging');
    this.confirmationService.confirm({
      message: 'آیا با اتمام بسته بندی موافق هستید؟',
      // header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('accept');
        this.finishedPackaging.emit(entity);
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      },
      reject: () => {
        console.log('reject');
        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
    // this.checkSelectedWarehouseInventory.emit('');
  }
}
