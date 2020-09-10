import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-directive',
  templateUrl: './my-directive.component.html',
  styleUrls: ['./my-directive.component.scss']
})
export class MyDirectiveComponent implements OnInit {

  @ViewChild("delegatePopOver", {static: true})
  delegatePopOver: NgbPopover;

  constructor() { }

  ngOnInit(): void {
  }

  print() {
    console.log('toggle !');
  }

  showPopup() {

    // this.delegatePopOver.open();
  }

}
