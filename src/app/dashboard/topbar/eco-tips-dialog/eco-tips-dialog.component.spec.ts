import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoTipsDialogComponent } from './eco-tips-dialog.component';

describe('EcoTipsDialogComponent', () => {
  let component: EcoTipsDialogComponent;
  let fixture: ComponentFixture<EcoTipsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoTipsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoTipsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
