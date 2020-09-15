import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent {



  tickets = [];
  ticket = null;

  p: number = 1;
    collection: any[]; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllTickets();
  }

  async getAllTickets() {
    this.tickets = (await this.http
      .get('http://localhost:3000/ticket')
      .toPromise()) as any;
    console.log(this.tickets);
    this.collection == this.tickets;
  }

  getTicket(ticket) {
    this.ticket = ticket;
    console.log(this.ticket);
 
  }

  delete(ticket) {
    this.ticket = ticket;
    console.log('delete ' + this.ticket._id);
    this.http
      .delete('http://localhost:3000/ticket/' + this.ticket._id)
      .subscribe();
      this.getAllTickets();
      window.location.reload();
  }
}
