import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  addressErrors,
  contactNo1Errors,
  emailErrors,
  firstNameErrors,
  genderErrors,
  lastNameErrors,
  passwordErrors,
} from '../utils/utils';
import { CookieService } from 'ngx-cookie-service';
import { userDataConst } from '../constants/userData.const';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: any;
  mobileNum1 = '';
  private userDataConst = userDataConst;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookie: CookieService,
  ) {}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      address: ['', [Validators.required, Validators.minLength(10)]],
      contactNo1: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      gender: ['', [Validators.required]], 
      password: [
        '',
        [Validators.required, Validators.minLength(5)],
      ], 
    });
  }
  getContact1NumberErrorMessage(): any {
    return contactNo1Errors(this.contactNo1.errors);  //here we've called the getter contactNo1. to call the formControl and show the error.
  }

  getFirstNameErrorMessage(): any {
    return firstNameErrors(this.firstName.errors);
  }

  getLastNameErrorMessage(): any {
    return lastNameErrors(this.lastName.errors);
  }
  getEmailErrorMessage(): any {
    return emailErrors(this.email.errors);
  }

  getAddressErrorMessage(): any {
    return addressErrors(this.address.errors);
  }
  getGenderErrorMessage(): any {
    return genderErrors(this.gender.errors); 
  }

  getPasswordErrorMessage(): any {
    return passwordErrors(this.password.errors); 
  }

  onSignupSubmit() {
    
      const userData = {
        id: this.userDataConst.length + 1, // Generate a unique ID
        name: `${this.firstName.value} ${this.lastName.value}`,
        email: this.email.value,
        address: this.address.value,
        gender: this.gender.value,
        arrayMobileNumber: this.contactNo1.value,
        password: this.password.value,
      };  //to get the information about the user

      const userDataConst = JSON.parse(localStorage.getItem('userData')!);  //parse : To use it as an array { ! :- shows that it is not null } 
      // Push user data to the array
      userDataConst.push(userData);  //pushes the userData object into an array called userDataConst.
      console.log("data after push", this.userDataConst); 
      this.router.navigate(['/home']);   //if the user is valid, so the home will be navigated.
      localStorage.setItem('userData', JSON.stringify(userDataConst));  //this line stores userDataConst array in the browser's localStorage, and we use JSON stringify to convert it into string, bcz localStorage only store strings
      localStorage.setItem('currentUser', JSON.stringify(userData)); //This line stores the userData object for the currently signed-in user in the local storage under the key 'currentUser'.
      this.cookie.set('isVerified', 'true'); // it is set true when the user will login, then the otp will popOut
    

  }
  mobileNumberValidation1() {
    if (this.contactNo1.value && this.contactNo1.value.length > 10) {
      this.contactNo1.setValue(this.contactNo1.value.slice(0, 10));
    }
  }
  
  ////getter methods allow you to access form controls more easily in the component. 
  // Instead of repeatedly calling [ this.signupForm.get(' ') ] we define this getter, we can use it wherever we want now
  get contactNo1() {
    return this.signupForm.get('contactNo1');
  }
  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get address() {
    return this.signupForm.get('address');
  }
  get gender() {
    return this.signupForm.get('gender'); 
  }
  get password() {
    return this.signupForm.get('password'); 
  }


}
