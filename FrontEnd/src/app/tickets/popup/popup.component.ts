import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input()
  displayTimer: number;

  constructor() {}

  ngOnInit(): void {
    this.openPopup();
  }

  openPopup() {
    this.displayTimer = 5;

    let interval = setInterval(() => {
      if (this.displayTimer != 0) {
        this.displayTimer -= 1;

        if (this.displayTimer == 1) {
          console.log('clear= ' + this.displayTimer);
          clearInterval(interval);
        }
      }
      console.log(this.displayTimer);
    }, 1000);



    // console.log('clear= ' + this.displayTimer);
    // if (this.displayTimer == 1) {
    //   console.log('clear= ' + this.displayTimer);
    //   clearInterval(interval);
    // }

    // setTimeout(() => {
    //   dialogRef.close();
    // }, 5000);
  }
}
