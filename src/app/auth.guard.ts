import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  if(authService.isLogged()){
    return true;
  }
  router.navigate(["login"], {queryParams: {blockedPage: state.url}})
  return false;
};