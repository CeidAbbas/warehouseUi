import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {WarehouseComponent} from './warehouse/warehouse.component';
import {WarehouseInventoryComponent} from './warehouse-inventory/warehouse-inventory.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {WarehouseEditComponent} from './warehouse/warehouse-edit.component';
import {WareComponent} from './ware/ware.component';
import {PersonComponent} from './person/person.component';
import {HttpClientModule} from '@angular/common/http';
import {PersonEditComponent} from './person/person-edit.component';
import {WarehouseResponsibleComponent} from './warehouse-responsible/warehouse-responsible.component';
import {WarehouseResponsibleEditComponent} from './warehouse-responsible/warehouse-responsible-edit.component';
import {WareEditComponent} from './ware/ware-edit.component';
import {HeaderToolsComponent} from './general/utility/header-tools/header-tools.component';
import {BaseInformationComponent} from './general/reference/base-information/base-information.component';
import {BaseInformationEditComponent} from './general/reference/base-information/base-information-edit.component';
import {WarehouseInventoryEditComponent} from './warehouse-inventory/warehouse-inventory-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalComponent} from './general/utility/modal/modal.component';
import {OperationBottomComponent} from './general/utility/operation-bottom/operation-bottom.component';
import {TreeComponent} from './general/utility/tree/tree.component';
import {TreeModule} from "primeng/tree";
import {ContextMenuModule} from "primeng/contextmenu";
import {ToastModule} from "primeng/toast";
import {DecimalPipe} from '@angular/common';
import {DpDatePickerModule} from "ng2-jalali-date-picker";
import { PackageComponent } from './package/package.component';
import { PackageEditComponent } from './package/package-edit.component';
import {TooltipModule} from "primeng/tooltip";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";
import {MessagesModule} from "primeng/messages";
import { ForwardingComponent } from './forwarding/forwarding.component';
import { ForwardingEditComponent } from './forwarding/forwarding-edit.component';
// import {MatDatepickerModulePersian} from '@angular-persian/material-date-picker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    WarehouseComponent,
    WarehouseInventoryComponent,
    SidebarComponent,
    WarehouseEditComponent,
    WareComponent,
    PersonComponent,
    PersonComponent,
    PersonEditComponent,
    HeaderToolsComponent,
    WarehouseResponsibleComponent,
    WarehouseResponsibleEditComponent,
    WareEditComponent,
    BaseInformationComponent,
    BaseInformationEditComponent,
    WarehouseInventoryEditComponent,
    OperationBottomComponent,
    ModalComponent,
    TreeComponent,
    PackageComponent,
    PackageEditComponent,
    ForwardingComponent,
    ForwardingEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TreeModule,
    BrowserAnimationsModule,
    ContextMenuModule,
    ReactiveFormsModule,
    // MatDatepickerModulePersian,
    // NgPersianDatepickerModule,
    ToastModule,
    DpDatePickerModule,
    TooltipModule,
    ConfirmDialogModule,
    MessagesModule,
  ],
  providers: [
    DecimalPipe,
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
