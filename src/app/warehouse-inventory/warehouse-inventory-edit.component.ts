import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ware} from "../ware/ware";
import {WarehouseInventory} from "./warehouse-inventory";
import {WarehouseInventoryService} from "./warehouse-inventory.service";
import {FormControl} from "@angular/forms";
import {Person} from "../person/person";
import {PersonService} from "../person/person.service";
import {WareService} from "../ware/ware.service";

@Component({
  selector: 'app-warehouse-inventory-edit',
  templateUrl: './warehouse-inventory-edit.component.html',
  styleUrls: ['./warehouse-inventory-edit.component.css']
})
export class WarehouseInventoryEditComponent implements OnInit {

  public warehouseInventory: WarehouseInventory = new WarehouseInventory();
  @Input() public wares?: Ware[];
  public producers?: Person[];
  @Input() public warehouseId?: string;
  @Output() public switchToGrid: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(
    private warehouseInventoryService: WarehouseInventoryService,
    private personService: PersonService,
    private wareService: WareService,
  ) {
  }

  ngOnInit(): void {
    this.warehouseInventory.warehouseId = this.warehouseId;
    console.log(this.warehouseId);
    this.warehouseInventory.color = '#e66465';
    this.loadProducers();
    this.loadWares();
  }

  buttonClicked($event: string) {
    // console.log($event);
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

  private loadProducers() {
    this.personService.getAllPerson().subscribe(persons => {
      this.producers = persons;
    });
  }

  private save() {
    this.warehouseInventoryService.saveWarehouseInventory(this.warehouseInventory).subscribe(warehouseInventory => {
      // console.log(warehouseInventory);
      this.switchToGrid.emit(true);

    });
  }

  private loadWares() {
    this.wareService.getAllWare().subscribe(wares => {
      this.wares = wares;
    });
  }
}
