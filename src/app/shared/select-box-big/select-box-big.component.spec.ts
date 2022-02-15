import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxBigComponent } from './select-box-big.component';

describe('SelectBoxBigComponent', () => {
  let component: SelectBoxBigComponent;
  let fixture: ComponentFixture<SelectBoxBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBoxBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
