import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsAvailableChipComponent } from './is-available-chip.component';

describe('IsAvailableChipComponent', () => {
  let component: IsAvailableChipComponent;
  let fixture: ComponentFixture<IsAvailableChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IsAvailableChipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsAvailableChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
