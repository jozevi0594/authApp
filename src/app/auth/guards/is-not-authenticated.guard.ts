import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

//PublicGuard -- PrivateGuard

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  // const url=state.url;
  // localStorage.setItem('url',url);
  // console.log('is auithenticated')
  // console.log({route,state});
  const authService=inject(AuthService);
  const router = inject(Router);

  if(authService.authStatus()===AuthStatus.authenticated){
  router.navigateByUrl('/dashboard');
  return false;
  }

  // if(authService.authStatus()===AuthStatus.checking){
  //   return false;
  // }

  return true;
};
