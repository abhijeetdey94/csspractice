import { Component, ComponentRef, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.mobile.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('backdrop') backdrop: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('mobNav') mobNav: ElementRef;
  @ViewChild('mobNavToggle') mobNavToggle: ElementRef;
  showModal: boolean;
  constructor(private renderer: Renderer2) {
    this.showModal = false;
  }

  ngAfterViewInit() {
    this.toggleBackdrop(false);
    this.toggleMobNav(false);
    this.renderer.listen(this.mobNavToggle.nativeElement, 'click', () => {
      this.toggleBackdrop(true);
      this.toggleMobNav(true);
    });
  }

  onComponentActivate(componentReference: ComponentRef<any>): void {
    if (componentReference instanceof HomeComponent) {
      componentReference.openEmitter.subscribe((data) => {
        this.showModal = true;
        this.toggleBackdrop(true);
      });
    }
  }
  toggleBackdrop(toggle: boolean): void {
    const val = toggle ? 'block' : 'none';
    this.renderer.setStyle(this.backdrop.nativeElement, 'display', val);
  }
  toggleMobNav(toggle: boolean): void {
    const val = toggle ? 'block' : 'none';
    this.renderer.setStyle(this.mobNav.nativeElement, 'display', val);
    if (val === 'none') { this.toggleBackdrop(false); }
  }
}
