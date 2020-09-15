// import { Component, Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
})
export class TicketFormComponent {
  timerSeconds =50000
  displayTimer : number;
  ticket = {
    title: '',
    description: '',
    reason: '',
    priority: '',
    newMessage: '',
  };

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  put() {
    console.log('put', this.ticket);
    this.http.put('http://localhost:3000/ticket', this.ticket).subscribe();
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/ticket').toPromise();
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent);

    setTimeout(() => {
      dialogRef.close();
    }, 5000);

  }
}
