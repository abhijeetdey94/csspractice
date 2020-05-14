import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.mobile.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('open') open: ElementRef;
  @Output() openEmitter = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.openEmitter.emit();
  }

}
