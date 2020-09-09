import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DynoFormsComponent} from './dyno-forms/dyno-forms.component';
import {GlobalScriptGuardsGuard} from './global-script-guards.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dyno'
  },
  {
    path: 'dyno',
    component: DynoFormsComponent,
    canActivate: [GlobalScriptGuardsGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule { }
