import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuGuardService implements CanActivate {
  /** Constructor */
  constructor(private router : Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    alert('You are not allowed to access Menu Items without Login! :(');
  
    this.router.navigate(['/login']);
    return false;
  }
}
