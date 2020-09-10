import { AfterViewChecked, AfterViewInit, ComponentFactoryResolver, Directive, HostListener, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { MyDirectiveComponent } from './my-directive.component';

@Directive({
  selector: '[myDirective]'
})
export class MyDirective implements AfterViewInit, AfterViewChecked, OnDestroy {

  @Input("myDirective")
  myDirective: string;

  constructor(private _conponentFactoryResolver: ComponentFactoryResolver,
              private _vcr: ViewContainerRef) { }

  ngAfterViewInit(): void {
    
  }

  ngAfterViewChecked(): void {


  }

  @HostListener('mouseenter') onMouseEnter() {

    const factory = this._conponentFactoryResolver.resolveComponentFactory(MyDirectiveComponent);
    let myContainerRef = this._vcr.createComponent(factory);
    myContainerRef.instance.print();
    myContainerRef.instance.showPopup();
  }

  @HostListener('mouseleave') onMouseLeave() {

    this._vcr.clear();
  }

  ngOnDestroy(): void {
   
  }
}
