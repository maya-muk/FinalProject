import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
