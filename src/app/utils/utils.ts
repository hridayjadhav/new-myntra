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
// export function firstNameErrors(errors: any): any {
//   if (errors.required) {
//     return 'Please enter your First Name';
//   }
//   if (errors.minlength) {
//     return 'Please enter your First Name';
//   }
//   if (errors.maxlength) {
//     return 'Please enter your First Name';
//   }
//   return '';
// }

// export function lastNameErrors(errors: any): any {
//   if (errors.required) {
//     return 'Please enter your Last Name';
//   }
//   if (errors.minlength) {
//     return 'Please enter your Last Name';
//   }
//   if (errors.maxlength) {
//     return 'Please enter your Last Name';
//   }
//   return '';
// }
