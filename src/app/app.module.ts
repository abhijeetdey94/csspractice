import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CssPlaygroundComponent } from './css-playground/css-playground.component';
import { AddIconDirective } from './directives/add-icon.directive';
import { SelectorsComponent } from './selectors/selectors.component';
import { PackagesComponent } from './packages/packages.component';
import { PositionComponent } from './position/position.component';
import { StackingComponent } from './stacking/stacking.component';
import { XmlComponent } from './xml/xml.component';
import { CustomersComponent } from './customers/customers.component';
import { StartHostingComponent } from './start-hosting/start-hosting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DummyComponent } from './dummy/dummy.component';
import { FlexComponent } from './flex/flex.component';
import { ShortenPipe } from './custom-pipe/shorten.pipe';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CssPlaygroundComponent,
    AddIconDirective,
    SelectorsComponent,
    PackagesComponent,
    PositionComponent,
    StackingComponent,
    XmlComponent,
    CustomersComponent,
    StartHostingComponent,
    DummyComponent,
    FlexComponent,
    ShortenPipe,
    GridComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
