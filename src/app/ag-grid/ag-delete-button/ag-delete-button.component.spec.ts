import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDeleteButtonComponent } from './ag-delete-button.component';

describe('AgDeleteButtonComponent', () => {
  let component: AgDeleteButtonComponent;
  let fixture: ComponentFixture<AgDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgDeleteButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
