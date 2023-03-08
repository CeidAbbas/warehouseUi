import { TestBed } from '@angular/core/testing';

import { CeidSelectService } from './ceid-select.service';

describe('CeidSelectService', () => {
  let service: CeidSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeidSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
