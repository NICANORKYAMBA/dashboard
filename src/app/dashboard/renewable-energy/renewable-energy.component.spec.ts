import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewableEnergyComponent } from './renewable-energy.component';

describe('RenewableEnergyComponent', () => {
  let component: RenewableEnergyComponent;
  let fixture: ComponentFixture<RenewableEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewableEnergyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewableEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
