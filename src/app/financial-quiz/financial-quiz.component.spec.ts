import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialQuizComponent } from './financial-quiz.component';

describe('FinancialQuizComponent', () => {
  let component: FinancialQuizComponent;
  let fixture: ComponentFixture<FinancialQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with first question', () => {
    expect(component.currentQuestionIndex).toBe(0);
    expect(component.currentQuestion).toBeTruthy();
  });

  it('should calculate progress correctly', () => {
    expect(component.progress).toBe(20);
    component.currentQuestionIndex = 4;
    expect(component.progress).toBe(100);
  });

  it('should navigate to next question', () => {
    component.selectOption('regularly');
    component.goNext();
    expect(component.currentQuestionIndex).toBe(1);
  });

  it('should navigate to previous question', () => {
    component.currentQuestionIndex = 1;
    component.goBack();
    expect(component.currentQuestionIndex).toBe(0);
  });

  it('should select option correctly', () => {
    const optionId = 'sometimes';
    component.selectOption(optionId);
    expect(component.currentQuestion.selectedOption).toBe(optionId);
  });
});
