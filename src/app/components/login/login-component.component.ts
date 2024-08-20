import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'gflix-login-component',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInputModule, MatButtonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss',
})
export class LoginComponentComponent {
  private fb = inject(FormBuilder);

  logInForm = this.fb.group({
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
