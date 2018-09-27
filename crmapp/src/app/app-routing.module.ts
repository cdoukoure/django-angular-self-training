import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';

const routes: Routes = [
{ path:  '', redirectTo:  'accounts', pathMatch:  'full' },
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
