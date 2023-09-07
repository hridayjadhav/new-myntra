import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  // let _router = inject(Router);
  // const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'false';
  // if(!isAuthenticated){
  //   _router.navigate(['/home']);
  // }
  
  // return isAuthenticated;
  return true;
};
