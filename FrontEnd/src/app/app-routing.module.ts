import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {TicketListComponent} from './tickets/ticket-list/ticket-list.component';
import {TicketFormComponent} from './tickets/ticket-form/ticket-form.component';
import { TicketViewComponent } from './tickets/ticket-view/ticket-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'ticket',
    pathMatch: 'full'
  },
  { path: 'ticket', component: TicketListComponent },
  { path: 'ticket/:id', component: TicketViewComponent },
  { path: 'create', component: TicketFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
