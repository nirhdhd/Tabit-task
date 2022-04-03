import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalScoreDialogComponent } from './final-score-dialog.component';

describe('FinalScoreDialogComponent', () => {
  let component: FinalScoreDialogComponent;
  let fixture: ComponentFixture<FinalScoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalScoreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalScoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
