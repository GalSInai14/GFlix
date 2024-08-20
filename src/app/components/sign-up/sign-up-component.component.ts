import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'gflix-sign-up-component',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up-component.component.html',
  styleUrl: './sign-up-component.component.scss',
})
export class SignUpComponentComponent {
  private fb = inject(FormBuilder);

  signUpForm = this.fb.group({
    firstName: this.fb.nonNullable.control<string>('', [Validators.required]),

    lastName: this.fb.nonNullable.control<string>('', [Validators.required]),

    email: this.fb.nonNullable.control<string>('', [
      Validators.email,
      Validators.required,
    ]),
    password: this.fb.nonNullable.control<string>('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
}
