import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss'],
})
export class DesktopHeaderComponent implements OnInit {
  yourVariable: boolean = true;
  bntStyle: string = '';
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    // document.getElementById('myNav').style.width = '100%';
    this.bntStyle = 'open';

    this.yourVariable = !this.yourVariable;
  }
  closeNav() {
    // document.getElementById('myNav').style.width = '0%';
    this.bntStyle = 'close';
  }
}
