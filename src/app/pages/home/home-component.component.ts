import { Component } from '@angular/core';
import { LoginComponentComponent } from '../../components/login/login-component.component';
import { User } from '../../models/user.model';
import { SignUpComponentComponent } from '../../components/sign-up/sign-up-component.component';

@Component({
  selector: 'gflix-home-component',
  standalone: true,
  imports: [LoginComponentComponent, SignUpComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss',
})
export class HomeComponentComponent {
  user: User | null | undefined;
}
