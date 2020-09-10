import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { MyDirectiveComponent } from './my-directive.component';
import { MyDirective } from './my-directive.directive';



@NgModule({
  declarations: [MyDirectiveComponent, MyDirective],
  imports: [
    CommonModule,
    NgbPopoverModule
  ],
  exports: [
    MyDirective
  ]
})
export class MyDirectiveModule { }
