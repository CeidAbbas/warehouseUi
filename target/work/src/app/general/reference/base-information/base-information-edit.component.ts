import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseInformation} from './base-information';
import {BaseInformationService} from './base-information.service';
import {MenuItem, TreeNode} from "primeng/api";
import {DecimalPipe} from "@angular/common";

// import {jqxTreeComponent} from "jqwidgets-ng/jqxtree";

@Component({
  selector: 'app-base-information-edit',
  templateUrl: './base-information-edit.component.html',
  styleUrls: ['./base-information-edit.component.css']
})
export class BaseInformationEditComponent implements OnInit, AfterViewInit {

  public baseInformation: BaseInformation;
  public baseInformations?: BaseInformation[];
  // public iBaseInformations?: IBaseInformation;
  public editLoadId?: string;
  public baseInformationTitle = '';
  public editMode = false;
  public addNode = false;
  @Input() public baseInformationId = '';
  @Output() public editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  baseInformationHeader!: string;
  plusMode: any;
  parent = '';
  label = '';

  treeNode: TreeNode[];
  selectedFile: TreeNode;
  menuItems: MenuItem[];

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.tree.selectItem(null);
    // });
  }

  constructor(
    private baseInformationService: BaseInformationService,
    private decimalPipe: DecimalPipe,
  ) {
    this.baseInformation = new BaseInformation();
  }

  ngOnInit(): void {
    this.onLoad();
    this.menuItems = [
      {label: 'افزودن', icon: 'pi pi-plus', command: (event) => this.showAddNode(this.selectedFile, 'add')},
      {label: 'ویرایش', icon: 'pi pi-plus', command: (event) => this.showAddNode(this.selectedFile, 'edit')}
      // {label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile()}
    ];
  }

  showAddNode(file: TreeNode, mode: string) {
    this.baseInformation = file as BaseInformation;
    let hierarchy: string;
    this.parent = this.baseInformation.id as string;
    if (mode === 'add') {
      this.baseInformation.id = null;
      hierarchy = this.baseInformation.hierarchy + this.transformDecimal(this.baseInformation.children.length + 1);
    } else if (mode === 'edit') {
      this.label = this.baseInformation.label;
      hierarchy = this.baseInformation.hierarchy;
    }
    this.baseInformation.hierarchy = hierarchy;
    this.addNode = true;
  }

  unselectFile() {
    this.selectedFile = null;
  }

  onLoad() {
    this.baseInformation = new BaseInformation();
    this.baseInformationService.getAllBaseInformation().subscribe(baseInformations => {
      this.baseInformations = baseInformations;
      this.makeTreeJson(this.baseInformations);
    });
  }

  save() {
    this.baseInformation.label = this.label;
    this.baseInformation.children = null;
    this.baseInformation.parent = null;
    this.baseInformationService.saveBaseInformation(this.baseInformation, this.parent).subscribe(
      data => {
        this.onLoad();
        this.addNode = false;
        this.label = null;
        this.baseInformation = new BaseInformation();
      }
    );
  }

  // tslint:disable-next-line:typedef
  switchToGrid() {
    this.baseInformation = new BaseInformation();
    this.editModeEmitter.emit(false);
  }

  // tslint:disable-next-line:typedef
  selectBaseInformation() {
    this.editMode = true;
    if (this.baseInformationHeader === 'gender') {
      this.baseInformationTitle = 'جنسيت';
    } else if (this.baseInformationHeader === 'wareType') {
      this.baseInformationTitle = 'نوع كالا';
    } else if (this.baseInformationHeader === 'wareUnit') {
      this.baseInformationTitle = 'واحد كالا';
    } else {
      this.editMode = false;
    }
    // this.baseInformationService.getAllBaseInformation().subscribe(baseInformations => {
    //   this.baseInformations = baseInformations;
    //   this.makeTreeJson(baseInformations);
    //   // this.baseInformations = this.removeNull(baseInformations, this.baseInformationHeader);
    // });
  }

  removeNull(objects: any, type: any) {
    objects.forEach((object: { [x: string]: null; }, index: number) => {
      if (object[type] == null) {
        delete objects[index];
      } else {
      }
    });
    return objects;
  }

  public makeTreeJson(baseInformations: any[]): void {
    let baseInformationHeaderFiltered: BaseInformation[] = [];
    baseInformationHeaderFiltered = baseInformations.filter((baseInformation, index) => {
      baseInformation.hierarchy < 1000 ? delete baseInformations[index] : null;
      return baseInformation.hierarchy < 1000;
    });
    baseInformationHeaderFiltered.forEach((baseInformationHeader) => {
      this.getChild(baseInformationHeader, baseInformations);
    });
    this.treeNode = baseInformationHeaderFiltered as TreeNode[];
  }

  getChild(baseInformationHeader: BaseInformation, baseInformations: BaseInformation[]): BaseInformation[] {
    let baseInformationsTree: BaseInformation[] = [];
    baseInformationHeader.children = new Array<BaseInformation>();
    baseInformations.filter(baseInformation => {
      if (baseInformation.hierarchy !== baseInformationHeader.hierarchy && baseInformation.hierarchy.search(baseInformationHeader.hierarchy) === 0 && (baseInformationHeader.hierarchy.length + 3) === baseInformation.hierarchy.length) {
        let bae = this.getChild(baseInformation, baseInformations);
        baseInformationHeader.children.push(bae[0] as BaseInformation);
      }
    });
    baseInformationsTree.push(baseInformationHeader);
    return baseInformationsTree;
  }

  transformDecimal(num) {
    return this.decimalPipe.transform(num, '3.');
  }
}
