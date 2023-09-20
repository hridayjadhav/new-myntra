import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const homeGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let _cookie = inject(CookieService);
  const isLoggedOut = _cookie.get('isVerified') !== 'true';
    if (!isLoggedOut) {
      _router.navigate(['/home']); // Redirect to home if already logged in
      return false;
    }
    return true;
  }
