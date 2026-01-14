import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface QuizOption {
  id: string;
  label: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  selectedOption?: string;
}

@Component({
  selector: 'app-financial-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './financial-quiz.component.html',
  styleUrl: './financial-quiz.component.scss'
})
export class FinancialQuizComponent {
  currentQuestionIndex = 0;
  totalQuestions = 5;
  userName = 'Yudha Pratama Ismed';

  questions: QuizQuestion[] = [
    {
      id: 1,
      question: 'How often do you track your monthly expenses?',
      options: [
        { id: 'regularly', label: 'Regularly, I know where every dollar goes' },
        { id: 'sometimes', label: 'Sometimes, I have a general idea' },
        { id: 'rarely', label: 'Rarely or never' }
      ],
      selectedOption: 'regularly'
    },
    {
      id: 2,
      question: 'What is your primary financial goal?',
      options: [
        { id: 'saving', label: 'Building an emergency fund' },
        { id: 'investing', label: 'Investing for long-term growth' },
        { id: 'debt', label: 'Paying off debt' }
      ]
    },
    {
      id: 3,
      question: 'How comfortable are you with investing?',
      options: [
        { id: 'very', label: 'Very comfortable, I invest regularly' },
        { id: 'somewhat', label: 'Somewhat comfortable, learning more' },
        { id: 'not', label: 'Not comfortable, prefer safer options' }
      ]
    },
    {
      id: 4,
      question: 'Do you have an emergency fund?',
      options: [
        { id: 'yes-full', label: 'Yes, 6+ months of expenses' },
        { id: 'yes-partial', label: 'Yes, but less than 6 months' },
        { id: 'no', label: 'No, not yet' }
      ]
    },
    {
      id: 5,
      question: 'How often do you review your financial plan?',
      options: [
        { id: 'monthly', label: 'Monthly or more often' },
        { id: 'quarterly', label: 'Quarterly or annually' },
        { id: 'rarely', label: 'Rarely or never' }
      ]
    }
  ];

  get currentQuestion(): QuizQuestion {
    return this.questions[this.currentQuestionIndex];
  }

  get progress(): number {
    return ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
  }

  get isFirstQuestion(): boolean {
    return this.currentQuestionIndex === 0;
  }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.totalQuestions - 1;
  }

  selectOption(optionId: string): void {
    this.currentQuestion.selectedOption = optionId;
  }

  goBack(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    } else {
      // Navigate back to previous page
      window.history.back();
    }
  }

  goNext(): void {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++;
    } else {
      // Submit quiz
      this.submitQuiz();
    }
  }

  submitQuiz(): void {
    console.log('Quiz submitted', this.questions);
    // Handle quiz submission logic here
    alert('Quiz completed! Thank you for your responses.');
  }
}
