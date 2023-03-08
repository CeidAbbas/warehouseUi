import { TestBed } from '@angular/core/testing';

import { PackageWarehouseInventoryService } from './package-warehouse-inventory.service';

describe('PackageWarehouseInventoryService', () => {
  let service: PackageWarehouseInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageWarehouseInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
