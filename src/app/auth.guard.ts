import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  const isVerified = sessionStorage.getItem('isVerified') === 'true';
  console.log('AuthGuard executed. isVerified:', isVerified);
  if(!isVerified){
    _router.navigate(['/login'])
  }
  
  return isVerified;
};
