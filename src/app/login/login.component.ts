import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { contactNoErrors, otpNoErrors } from '../utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Login Form data
  loginForm: any;
  mobileNum = '';
  public isLoggedIn = false;

  transferNum() {
    const mobileNum = this.loginForm.get('contactNo').value;
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      contactNo: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
    this.otpForm = new FormGroup({
      otpNo: new FormControl('', [
        //formControls are classes which holds the data, value and the validation info of any form element.
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
    });
  }

  getContactNumberErrorMessage(): any {
    return contactNoErrors(this.contactNo.errors);
  }

  getOtpErrorMessage(): any {
    return otpNoErrors(this.otpNo.errors);
  }

  onSubmitForm() {
    this.mobileNum = this.loginForm.get('contactNo').value;
    this.isLoggedIn = true;
    this.interval = setInterval(() => this.numDecrement(this.num), 1000);
  }

  mobileNumberValidation() {
    if (this.contactNo.value && this.contactNo.value.length > 10) {
      //if the number is more than 10, then the slice will show only 10 digits and it will automatically removes remaining digits.
      this.contactNo.setValue(this.contactNo.value.slice(0, 10)); //contactNo value aur uski lenth agr 10 se zyada hai, to wo 10 number hi lega aur baki slice krega
    }
  }

  get contactNo() {
    return this.loginForm.get('contactNo'); //  input ka pura data including validation wo return krega.
  }

  // Otp form data
  num = 10;
  interval: any;
  otpForm: any;

  limit() {
    if (this.otpNo.value && this.otpNo.value.length > 4) {
      this.otpNo.setValue(this.otpNo.value.slice(0, 4));
    }
  }

  get otpNo() {
    return this.otpForm.get('otpNo'); //  input ka pura data including validation wo return krega.
  }

  restartTimer() {
    this.num = 10;
    this.interval = setInterval(() => this.numDecrement(this.num), 1000);
  }

  numDecrement(numRecieved: number) {
    this.num--;
    if (this.num === 0) {
      clearInterval(this.interval);
    }
  }

  goToHome() {
    // this.isLoggedIn = true;
    // this.router.navigate(['/home']);
    const enteredOTP = this.otpForm.get('otpNo').value;
    if (enteredOTP) {
      sessionStorage.setItem('isVerified', 'true');
      this.router.navigate(['/home']);
    }
  }

  public backToLogin() {
    this.isLoggedIn = false;
  }
}
