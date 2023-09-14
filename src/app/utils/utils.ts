export function contactNoErrors(errors: any): any {
  if (errors.required) {
    return 'Please Enter A Valid Mobile Number';
  }
  if (errors.minlength) {
    return 'Please Enter A Valid Mobile Number (10 digits)';
  }
  if (errors.maxlength) {
    return 'Please Enter A Valid Mobile Number (10 digits)';
  }
  return '';
}
export function passwordErrors(errors: any): any {
  if (errors.required) {
    return 'Please Enter A Valid Password';
  }
  if (errors.minlength) {
    return 'Please Enter A Valid Mobile Number (5)';
  }
  return '';
}
export function otpNoErrors(errors: any): any {
  if (errors.required) {
    return 'Please Enter A Valid OTP';
  }
  if (errors.minlength) {
    return 'Please Enter A Valid OTP (4 digits)';
  }
  if (errors.maxlength) {
    return 'Please Enter A Valid OTP (4 digits)';
  }
  return ''; // Return an empty string if no errors are found
}
export function firstNameErrors(errors: any): any {
  if (errors.required) {
    return 'Please enter your First Name';
  }
  if (errors.minlength) {
    return 'Please enter your First Name';
  }
  if (errors.maxlength) {
    return 'Please enter your First Name';
  }
  return '';
}

export function lastNameErrors(errors: any): any {
  if (errors.required) {
    return 'Please enter your Last Name';
  }
  if (errors.minlength) {
    return 'Please enter your Last Name';
  }
  if (errors.maxlength) {
    return 'Please enter your Last Name';
  }
  return '';
}

export function emailErrors(errors: any): any {
  if (errors.required) {
    return 'Please enter your Email';
  }
  if(errors.pattern){
    return "Enter a valid Email";
  }
  return '';
}

export function addressErrors(errors: any): any {
  if (errors.required) {
    return 'Please enter your Address';
  }
  if(errors.minlength){
    return 'Please enter a valid Address'
  }
  return '';
}
export function contactNo1Errors(errors: any): any {
  if (errors.required) {
    return 'Please Enter A Valid Mobile Number';
  }
  if (errors.minlength) {
    return 'Please Enter A Valid Mobile Number (10 digits)';
  }
  if (errors.maxlength) {
    return 'Please Enter A Valid Mobile Number (10 digits)';
  }
  return '';
}
export function genderErrors(errors: any): any {
  if (errors.required) {
    return 'Please Enter A Valid Gender';
  }
  return '';
}