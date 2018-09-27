import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';

const routes: Routes = [
{ path:  '', redirectTo:  'dashboard', pathMatch:  'full' },
{
    path:  'dashboard',
    component:  DashboardComponent
},
{
    path:  'heroes',
    component:  HeroesComponent
},
{
    path: 'detail/:id',
    component: HeroDetailComponent
},
{
    path:  'accounts',
    component:  AccountListComponent
},
{
    path:  'create-account',
    component:  AccountCreateComponent
},
{
    path:  'contacts',
    component:  ContactListComponent
},
{
    path:  'create-contact',
    component:  ContactCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
