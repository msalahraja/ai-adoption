import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-figma-hero',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './figma-hero.component.html',
  styleUrl: './figma-hero.component.scss'
})
export class FigmaHeroComponent implements OnInit {
  getStartedForm!: FormGroup;
  submitted = false;
  successMessage = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getStartedForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get f() {
    return this.getStartedForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.getStartedForm.invalid) {
      return;
    }

    // Success
    this.successMessage = true;
    console.log('Form submitted:', this.getStartedForm.value);

    // Reset form after 3 seconds
    setTimeout(() => {
      this.getStartedForm.reset();
      this.submitted = false;
      this.successMessage = false;
    }, 3000);
  }
}
