import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private service: LoginService, private router: Router) { }

  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  failed = false;

  form = new FormGroup({
    email: this.email,
    password: this.password
  });

  async login() {
    try {
      this.failed = false;
      this.form.disable();
      await this.service.login(this.email.value, this.password.value);
      await this.router.navigate(['chat']);
    } catch (error) {
      this.failed = true;
    } finally {
      this.form.enable();
    }
  }
}
