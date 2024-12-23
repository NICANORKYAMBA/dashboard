import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateDataComponent } from './climate-data.component';

describe('ClimateDataComponent', () => {
  let component: ClimateDataComponent;
  let fixture: ComponentFixture<ClimateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimateDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
