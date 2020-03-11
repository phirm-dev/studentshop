import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidmodalComponent } from './bidmodal.component';

describe('BidmodalComponent', () => {
  let component: BidmodalComponent;
  let fixture: ComponentFixture<BidmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
