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
