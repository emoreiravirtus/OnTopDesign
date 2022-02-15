import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarBigComponent } from './search-bar-big.component';

describe('SearchBarBigComponent', () => {
  let component: SearchBarBigComponent;
  let fixture: ComponentFixture<SearchBarBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
