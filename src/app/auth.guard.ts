import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let _cookie = inject(CookieService);
  const isVerified = _cookie.get('isVerified') === 'true';
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
 
  // console.log('AuthGuard executed. isVerified:', isVerified);
  if(!isVerified || !currentUser){
    _router.navigate(['/login']);
    return false;
  }
  
  return isVerified;
};
