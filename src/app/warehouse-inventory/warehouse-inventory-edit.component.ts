import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ware} from "../ware/ware";
import {WarehouseInventory} from "./warehouse-inventory";
import {WarehouseInventoryService} from "./warehouse-inventory.service";
import {Person} from "../person/person";
import {PersonService} from "../person/person.service";
import {WareService} from "../ware/ware.service";
import {JalaliPipe} from "../general/utility/pipeTools/dateTimeTools/jalali-pipe";
import { FormControl } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-warehouse-inventory-edit',
  templateUrl: './warehouse-inventory-edit.component.html',
  styleUrls: ['./warehouse-inventory-edit.component.css']
})
export class WarehouseInventoryEditComponent implements OnInit {

  public warehouseInventory: WarehouseInventory = new WarehouseInventory();
  @Input() public wares?: Ware[];
  public producers?: Person[];
  @Input() warehouseId?: string;
  @Output() public switchToGrid: EventEmitter<boolean> = new EventEmitter<boolean>();

  expirationDate = new FormControl();
  entryDate = new FormControl();
  dataValue = new FormControl();
  selectedFile?: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  constructor(
    private warehouseInventoryService: WarehouseInventoryService,
    private personService: PersonService,
    private wareService: WareService,
    private dateTransformer: JalaliPipe,
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.getImage();
    this.warehouseInventory.warehouseId = this.warehouseId;
    this.warehouseInventory.color = '#e66465';
    this.loadProducers();
    this.loadWares();
  }

  buttonClicked($event: string) {
    switch ($event) {
      case 'save':
        this.warehouseInventory.entryDate = this.entryDate.value;
        this.warehouseInventory.expirationDate = this.expirationDate.value;
        this.uploadFile();
        this.save();
        console.log(this.warehouseInventory);
        break;
      case 'reload':
        break;
      case 'return':
        this.switchToGrid.emit(true);
        break;
    }
  }

  private loadProducers() {
    this.personService.getAllPerson().subscribe(persons => {
      this.producers = persons;
    });
  }

  private save() {
    const file = new FormData();
    if (this.selectedFile) {
      file.append('file', this.selectedFile);
      // file.append('file', this.selectedFile, this.selectedFile.name);
    }

    this.warehouseInventoryService.saveWarehouseInventory(this.warehouseInventory, file).subscribe(warehouseInventory => {
      this.switchToGrid.emit(true);
    });
  }

  private loadWares() {
    this.wareService.getAllWare().subscribe(wares => {
      this.wares = wares;
    });
  }

  selectFile(event: any) {
    if (event.target != null && event.target.files != null)
      this.selectedFile = event.target.files.item(0);
  }

  private uploadFile() {
    // if (this.selectedFile) {
    //   const file: File | null = this.selectedFile.item(0);
    //   if (file) {
    //     this.currentFile = file;
        // this.warehouseInventory.warehouseInventoryFile = file;
      // }
    // }
  }

  getImage() {
  //   this.warehouseInventoryService.getImage().subscribe(result => {
  //     this.retrieveResonse = result;
  //     this.base64Data = this.retrieveResonse.file;
  //     this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //   })
  }
}
