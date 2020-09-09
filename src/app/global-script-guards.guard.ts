import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ScriptLoaderService} from './services/script-loader.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalScriptGuardsGuard implements CanActivate {

  constructor(private scripts: ScriptLoaderService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
