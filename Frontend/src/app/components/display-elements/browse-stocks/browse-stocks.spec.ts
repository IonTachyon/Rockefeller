import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseStocks } from './browse-stocks';

describe('BrowseStocks', () => {
  let component: BrowseStocks;
  let fixture: ComponentFixture<BrowseStocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseStocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseStocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
