import {Component, OnInit} from '@angular/core';
import {Forwarding} from "./forwarding";
import {ForwardingService} from './forwarding.service';

@Component({
  selector: 'app-forwarding',
  templateUrl: './forwarding.component.html',
  styleUrls: ['./forwarding.component.css']
})
export class ForwardingComponent implements OnInit {
  forwardings: Forwarding[] = [];
  editMode = false;
  title: '';
  forwardingTitle = 'ارسال بسته بندی';
  editModeTitle = 'ثبت ارسال بسته بندی';
  editLoadId: any;
  id = '0cd673ef3d3c43bcb52a254175a7f751';

  constructor(
    private forwardingService: ForwardingService,
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

  switchToEditMode(id) {

  }

  editModeBack($event: boolean) {
    this.editMode = $event;
    if (!this.editMode)
      this.loadData();
  }

  reload() {
    this.loadData();
  }
}
