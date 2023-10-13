import {Component, OnInit} from '@angular/core';
import {Package} from "./package";
import {PackageService} from "./package.service";

@Component({
  selector: 'app-package-edit',
  templateUrl: './package-edit.component.html',
  styleUrls: ['./package-edit.component.css']
})
export class PackageEditComponent implements OnInit {
  public switchToGrid: any;
  public package: Package;

  constructor(
    private packageService: PackageService,
  ) {
    this.package = new Package();
  }

  ngOnInit(): void {
  }

  buttonClicked($event: string) {
    switch ($event) {
      case 'save':
        this.save();
        break;
      case 'reload':
        break;
      case 'return':
        this.switchToGrid.emit(true);
        break;
    }
  }

  private save() {
    this.package.status = true;
    this.packageService.savePackage(this.package).subscribe(newPackage => {
    });
  }
}
