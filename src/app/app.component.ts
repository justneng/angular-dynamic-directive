import { AfterViewInit, ChangeDetectorRef, Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-dynamic-directive';

  @ViewChild("container", { read: ViewContainerRef })
  container;

  constructor(private _cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
    this._cdr.detectChanges();
  }


  print() {
    console.log('greeting !');
  }

  getContainer() {
    return this.container;
  }
}
