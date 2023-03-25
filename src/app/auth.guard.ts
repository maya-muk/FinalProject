import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private toaster: ToastrService , private route: Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
    const token = localStorage.getItem('token')
    let user:any = localStorage.getItem('user')
    user = JSON.parse(user)
    
    if(token)
    {
    if (state.url.includes('Admin'))
    {
      if (user.Roleid == 1)
      {
        this.toaster.success("Welcome on admin dashboard")
        return true;
      }
      else{
        this.toaster.error("This Page For Admin")
        this.route.navigate([''])
       return false; 
      }
    }
    
    
    if (state.url.includes('User'))
    {
      if (user.Roleid == 2)
      {
        this.toaster.success("Welcome on User dashboard")
        return true;
      }
      else{
        this.toaster.error("This Page For User")
        this.route.navigate([''])
       return false; 
      }
    }
    
    
    
      return true
    }
    else{
      this.toaster.error("please login ")
      this.route.navigate([''])
     return false; 
    }
    
    
    
  }
  
}
