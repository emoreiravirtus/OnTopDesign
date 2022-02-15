import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxSmallComponent } from './select-box-small.component';

describe('SelectBoxSmallComponent', () => {
  let component: SelectBoxSmallComponent;
  let fixture: ComponentFixture<SelectBoxSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBoxSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
