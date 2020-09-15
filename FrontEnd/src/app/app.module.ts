import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {TicketsModule} from './tickets/tickets.module';

import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { CommonModule } from '@angular/common';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketFormComponent } from './tickets/ticket-form/ticket-form.component';
import { TicketViewComponent } from './tickets/ticket-view/ticket-view.component';


import {MatListModule} from '@angular/material/list';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';
import { PopupComponent } from './tickets/popup/popup.component';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    TicketViewComponent,
    TicketListComponent,
    TicketFormComponent,
    AppComponent,
    PopupComponent, 
  ],
  exports:[    
    MatFormFieldModule,
    MatSliderModule,
   ],
  imports: [
    MatDialogModule,
    MatListModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
