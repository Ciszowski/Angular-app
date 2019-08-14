import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Observable'
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthServices } from './auth.services';


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authServices : AuthServices,
                private route: Router){}
    
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot)
    :  Observable<boolean> | Promise<boolean> | boolean {
        if(this.authServices.isAuth){
            return true;
        }else{
            this.route.navigate(['auth'])
        }
    }
}