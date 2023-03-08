import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseInformation} from '../general/reference/base-information/base-information';
import {Ware} from "./ware";
import {WareService} from "./ware.service";
import {TreeNode} from "primeng/api";
import {BaseInformationComponent} from "../general/reference/base-information/base-information.component";

@Component({
  selector: 'app-ware-edit',
  templateUrl: './ware-edit.component.html',
  styleUrls: ['./ware-edit.component.css']
})
export class WareEditComponent implements OnInit {

  public ware: Ware;
  public baseInformations?: BaseInformation[];
  public wareUnits?: BaseInformation[];
  public wareTypes?: BaseInformation[];
  public editLoadId?: string;
  @Input() public wareId: string = '';
  @Output() public editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  treeNode: TreeNode[] = [];
  selectedFile?: BaseInformation;
  // selectedFile: TreeNode;

  // baseInformationComponent: BaseInformationComponent;

  constructor(
    private wareService: WareService,
  ) {
    this.ware = new Ware();
  }

  ngOnInit(): void {
    if (this.wareId != '') {
      this.onLoad();
    }
    this.loadBaseInformation();
  }

  onLoad() {
    this.ware = new Ware();
    this.wareService.loadWare(this.wareId).subscribe(ware => {
      this.ware = ware;
    });
  }

  save() {
    console.log(this.selectedFile);
    // @ts-ignore
    this.ware.typeTitle = this.selectedFile.label;
    // @ts-ignore
    this.ware.typeId = this.selectedFile.id;
    console.log(this.ware);
    this.wareService.saveWare(this.ware).subscribe(ware => {
      success: {
        this.switchToGrid();
      }
    });
  }

  switchToGrid() {
    this.ware = new Ware();
    this.editModeEmitter.emit(false);
  }

  private loadBaseInformation() {
    this.wareService.getAllBaseInformation().subscribe(baseInformations => {
      this.wareUnits = baseInformations.filter(baseInformation => {
        return baseInformation.parent === '0cd673ef-3d3c-43bc-b52a-254175a7f751';
      });
    });
    this.wareService.getAllBaseInformation().subscribe(baseInformations => {
      this.wareTypes = baseInformations.filter(baseInformation => {
        // @ts-ignore
        return baseInformation.hierarchy.search('002') === 0 && baseInformation.id !== 'f3f2644f-6fac-429b-b7cc-df1e2947b63e';
      });
      this.makeTreeJson(this.wareTypes);
    });
  }

  public makeTreeJson(baseInformations: any[]): void {
    let baseInformationHeaderFiltered: BaseInformation[] = [];
    baseInformationHeaderFiltered = baseInformations.filter((baseInformation, index) => {
      baseInformation.hierarchy < 1000000 ? delete baseInformations[index] : null;
      return baseInformation.hierarchy < 1000000;
    });
    baseInformationHeaderFiltered.forEach((baseInformationHeader) => {
      if (baseInformationHeader != undefined)
        this.getChild(baseInformationHeader, baseInformations);
    });
    this.treeNode = baseInformationHeaderFiltered as TreeNode[];
  }

  getChild(baseInformationHeader: BaseInformation, baseInformations: BaseInformation[]): BaseInformation[] {
    let baseInformationsTree: BaseInformation[] = [];
    baseInformationHeader.children = new Array<BaseInformation>();
    baseInformations.filter(baseInformation => {
      // @ts-ignore
      if (baseInformation.hierarchy !== baseInformationHeader.hierarchy && baseInformation.hierarchy.search(baseInformationHeader.hierarchy) === 0 && (baseInformationHeader.hierarchy.length + 3) === baseInformation.hierarchy.length) {
        let bae = this.getChild(baseInformation, baseInformations);
        // @ts-ignore
        baseInformationHeader.children.push(bae[0] as BaseInformation);
      }
    });
    baseInformationsTree.push(baseInformationHeader);
    return baseInformationsTree;
  }

}
