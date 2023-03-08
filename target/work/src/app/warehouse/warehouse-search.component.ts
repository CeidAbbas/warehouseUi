import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Warehouse} from "./warehouse";

@Component({
  selector: 'app-warehouse-search',
  templateUrl: './warehouse-search.component.html',
  styleUrls: ['./warehouse-search.component.css']
})
export class WarehouseSearchComponent implements OnInit {

  @Output() searchModeEmitter: EventEmitter<Warehouse> = new EventEmitter<Warehouse>();
  warehouseSearchModel: Warehouse = new Warehouse();

  constructor() {
  }

  ngOnInit(): void {
  }

  search() {
    this.searchModeEmitter.emit(this.warehouseSearchModel);
  }
}
