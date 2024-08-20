import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'gflix-login-component',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss',
})
export class LoginComponentComponent {
  private fb = inject(FormBuilder);

  logInForm = this.fb.group({
    email: this.fb.nonNullable.control<string>('', Validators.email),
    password: this.fb.nonNullable.control<string>(''),
  });
}
