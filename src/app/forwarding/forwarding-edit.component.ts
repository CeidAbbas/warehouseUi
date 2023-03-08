import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Forwarding} from "./forwarding";
import {ForwardingService} from "./forwarding.service";

@Component({
  selector: 'app-forwarding-edit',
  templateUrl: './forwarding-edit.component.html',
  styleUrls: ['./forwarding-edit.component.css']
})
export class ForwardingEditComponent implements OnInit {

  forwarding: Forwarding = new Forwarding();
  @Output() switchToGrid: EventEmitter<boolean> = new EventEmitter();
  emptyString: string = '';

  constructor(
    private forwardingService: ForwardingService,
  ) {
  }

  ngOnInit(): void {
  }

  buttonClicked($event: string) {
    switch ($event) {
      case 'save':
        this.save();
        break;
      case 'reload':
        this.clearForm();
        break;
      case 'return':
        this.switchToGrid.emit(false);
        break;
    }
  }

  save() {
    this.forwardingService.saveForwarding(this.forwarding).subscribe(forwarding => {
      this.switchToGrid.emit(false);
    });
  }

  clearForm() {
    this.forwarding = new Forwarding();
    this.emptyString = '';
  }
}
