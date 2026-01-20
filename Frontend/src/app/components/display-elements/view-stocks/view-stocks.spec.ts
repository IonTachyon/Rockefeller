import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStocks } from './view-stocks';

describe('ViewStocks', () => {
  let component: ViewStocks;
  let fixture: ComponentFixture<ViewStocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewStocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
