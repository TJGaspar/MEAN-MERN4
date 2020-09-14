// import { Component, Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
// export class TicketFormComponent implements OnInit {
  export class TicketFormComponent{

  // @Input()
  // editField = "User can edit this field!";

  // @Input()
  // xpto = "XPTO defaultValue";
  
  // titleApp = "Title";
  // descriptionApp = "Description";
  // priorityApp= "Priority";
  // reasonApp = "Reason";
  // newMessageApp = "New Message"
   

ticket = {
  title: "",
  description: "",
  reason: "",
  priority: "",
  newMessage: "",
};

  constructor(private http: HttpClient) {}
  
  
  put(){
    console.log('put', this.ticket);
    this.http.put('http://localhost:3000/ticket',this.ticket).subscribe();
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/ticket').toPromise();
  }

}
