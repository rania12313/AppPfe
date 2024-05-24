import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/globalServices/auth.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LocalStorageService } from 'src/app/globalServices/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myLoginForm!: FormGroup;
  myRegisterForm!: FormGroup;
  loginErrors: string = '';
  registerErrors: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    localS: LocalStorageService
  ) {}

  ngOnInit() {
    this.myLoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.min(0), Validators.max(120)]),
    });
    this.myRegisterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.min(5), Validators.max(120)]),
    });
    this.toggled = localStorage.getItem('authToggled') === 'true';
  }

  onSubmit() {
    if (this.myLoginForm.valid) {
      console.log('Form submitted:', this.myLoginForm.value.email);
      const user = {
        email: this.myLoginForm.value.email,
        password: this.myLoginForm.value.password,
      };
      this.authService.login(user).subscribe({
        next: (data) => {
          console.log(data);
          this.loginErrors = '';
        },
        error: (error) => {
          console.log(error);

          if (error.error.status == 403) {
            this.loginErrors = 'Invalid credentials';
          }
        },
      });
    }
  }

  onRegister() {
    console.log('test');

    if (this.myRegisterForm.valid) {
      console.log('Form submitted:', this.myRegisterForm.value.email);
      const user = {
        name: this.myRegisterForm.value.name,
        email: this.myRegisterForm.value.email,
        password: this.myRegisterForm.value.password,
        userRole: 'USER',
      };
      this.authService.register(user).subscribe({
        next: (data: any) => {
          if (this.registerErrors) {
            this.registerErrors = '';
          }
          this.toggleSide();
        },
        error: (err) => {
          let error: string = err.error.message;
          console.log(error);

          if (error.includes('Duplicate entry')) {
            this.registerErrors = 'Email already exists';
          }
        },
      });
    } else {
      console.log('Form not valid');
    }
  }

  toggled = false;
  toggleSide() {
    this.toggled = !this.toggled;
    localStorage.setItem('authToggled', this.toggled ? 'true' : 'false');
  }
}
