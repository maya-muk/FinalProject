import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:"Admin",
  loadChildren:()=>import ('./admin/admin.module').then(x=>x.AdminModule)
},
{
  path:"Auth",
  loadChildren:()=>import ('./auth/auth.module').then(x=>x.AuthModule)
},
{
  path:"",
  loadChildren:()=>import ('./home/home.module').then(x=>x.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
