import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import data from '../../../assets/json/data.json';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {
  classList: any;
  status: boolean = true;
  snapshotAvailable: boolean = false;
  pageYoffset: number = 0;
  classData: any = data[0];
  snapshots: any = data[0].snapshots;
  accordionData: any = data[0].accordion;
  availableSnapshots: number = 0;

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < this.accordionData.length; i++) {
      if (this.accordionData[i].snapshot === true) {
        this.availableSnapshots++;
      }
    }
  }
  scrollToTop($element: any) {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
