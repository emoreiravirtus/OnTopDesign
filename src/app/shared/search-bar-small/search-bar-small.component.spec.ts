import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarSmallComponent } from './search-bar-small.component';

describe('SearchBarSmallComponent', () => {
  let component: SearchBarSmallComponent;
  let fixture: ComponentFixture<SearchBarSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
