import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { contactNoErrors, passwordErrors, otpNoErrors } from '../utils/utils';
import { CookieService } from 'ngx-cookie-service';
import { login_img_url, otp_img } from '../constants/constants';
import { otpConst } from '../constants/otpConst';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Login Form data
  loginForm: any;
  loginMobileNumber = '';
  public isLoggedIn = false;
  public showPasswordInput = false;
  public loggingInWithPassword = false; // indicate logging in with both mobile and password
  showOTPCountdown = true;
  showResendOTPButton = false;

  // Otp form data
  num = 10;
  interval: any;
  otpForm: any;

  // Use userDataConst as the database
  userDataArray: any;
  otpArrayConst = otpConst;

  //imgs
  loginImage = login_img_url;
  otpImage = otp_img;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    const userDataJson = localStorage.getItem('userData');
    if (userDataJson) {
      this.userDataArray = JSON.parse(userDataJson);
    }
    this.loginForm = this.fb.group({
      contactNo: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      password: ['', [Validators.required]],
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

  getContactNumberErrorMessage(): any {    //this is to get the error message from the utils.
    return contactNoErrors(this.contactNo.errors);
  }

  getPasswordErrorMessage() {
    return passwordErrors(this.password.errors);
  }

  getOtpErrorMessage(): any {
    return otpNoErrors(this.otpNo.errors);
  }

  onSubmitForm() {
    this.loginMobileNumber = this.contactNo.value;   //it will extract the number entered by the user in the login form.
    const password = this.password.value;   //and it will extract the password
    //Check if a password is entered
    if (password) {
      //it will find in the array, and see the matched mobile number entered via user.
      const user = this.userDataArray.find(
        (userData: any) => userData.arrayMobileNumber === this.loginMobileNumber
      );
      if (user) {
        //it will check that the user's password is matched
        if (user.password === password) {
          this.isLoggedIn = true;  //then it will show the otp page.
          localStorage.setItem('currentUser', JSON.stringify(user));   //it will store the data of user's object key ( currentUser ).
          this.interval = setInterval(() => this.numDecrement(this.num), 1000);  // it is to resent otp timer.
        } else {
          alert('Incorrect password');
        }
      } else {
        alert('Incorrect Details');
      }
    } else {
      //here If user will not use the pwd, so it will find the user's data via mobile number.
      const user = this.userDataArray.find(
        (userData: any) => userData.arrayMobileNumber === this.loginMobileNumber 
      );
      if (user) {
        this.isLoggedIn = true;   //it will show the otp page.
        localStorage.setItem('currentUser', JSON.stringify(user));  //stored the user's object.
        this.interval = setInterval(() => this.numDecrement(this.num), 1000);  //otp timer
      } else { 
        alert('mobile number is not registred');
      }
    }
  }

  onOTPForm() {
    const enteredOTP = this.otpNo.value;
    const isOtpValid = this.otpArrayConst.includes(enteredOTP); //include will check that specific value of enteredOTP exist or not, if yes then it is true otherwise false.
    if (isOtpValid) { //isOtpValid will be true if (enteredOTP) is found in the (otpArray) 
      this.cookie.set('isVerified', 'true'); //it is set true when the user will login successfully, then the otp will popOut
      this.router.navigate(['/home']); //and then redirect tot the home.
    }else{
      alert('Incorrect OTP');
    }
  }

  mobileNumberValidation() {
    if (this.contactNo.value && this.contactNo.value.length > 10) {
      //if the number is more than 10, then the slice will show only 10 digits and it will automatically removes remaining digits.
      this.contactNo.setValue(this.contactNo.value.slice(0, 10)); //contactNo value aur uski lenth agr 10 se zyada hai, to wo 10 number hi lega aur baki slice krega
    }
  }

  limit() {
    if (this.otpNo.value && this.otpNo.value.length > 4) {
      this.otpNo.setValue(this.otpNo.value.slice(0, 4));
    }
  }

  //getter methods allow you to access form controls more easily in the component.
  get contactNo() {
    return this.loginForm.get('contactNo'); //  input ka pura data including validation wo return krega.
  }
  get password() {
    return this.loginForm.get('password');
  }
  get otpNo() {
    return this.otpForm.get('otpNo');
  }

  restartTimer() {
    this.num = 10;
    this.interval = setInterval(() => this.numDecrement(this.num), 1000);
    this.showOTPCountdown = true; // Show the countdown
    this.showResendOTPButton = false; // Hide the Resend OTP button
  }

  numDecrement(numRecieved: number) {
    this.num--;
    if (this.num === 0) {
      clearInterval(this.interval);
      this.showOTPCountdown = false; // Hide the countdown when it reaches 0
      this.showResendOTPButton = true; // Show the Resend OTP button
    }
  }

  public backToLogin() {
    this.isLoggedIn = false;
  }

  public switchToSignUp() {
    this.router.navigate(['/signup']);
  }
  onContinueClick() {
    this.showPasswordInput = true;  // showing the password input
  }
}
