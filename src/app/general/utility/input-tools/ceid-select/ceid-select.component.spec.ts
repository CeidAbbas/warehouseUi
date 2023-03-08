import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeidSelectComponent } from './ceid-select.component';

describe('CeidSelectComponent', () => {
  let component: CeidSelectComponent;
  let fixture: ComponentFixture<CeidSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeidSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeidSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
