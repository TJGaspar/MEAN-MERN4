import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpDownloadProgressEvent } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.scss']
})
export class TicketViewComponent implements OnInit {
  
  ticket = {
    title: "",
    description: "",
    reason: "",
    priority: "",
    newMessage: "",
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.ticket = (await this.http.get('http://localhost:3000/ticket/'+this.route.snapshot.paramMap.get('id')).toPromise())  as any;

  }
}