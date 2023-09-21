import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  user: User = new User("", "", "", "");

  constructor() { }

  onSubmit(): void {
    console.log(this.user);
  }
}
