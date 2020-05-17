import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CssPlaygroundComponent } from './css-playground/css-playground.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { PackagesComponent } from './packages/packages.component';
import { PositionComponent } from './position/position.component';
import { StackingComponent } from './stacking/stacking.component';
import { XmlComponent } from './xml/xml.component';
import { CustomersComponent } from './customers/customers.component';
import { StartHostingComponent } from './start-hosting/start-hosting.component';
import { FlexComponent } from './flex/flex.component';
import { GridComponent } from './grid/grid.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'packages', component: PackagesComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'start-hosting', component: StartHostingComponent},
  {path: 'position', component: PositionComponent},
  {path: 'css', component: CssPlaygroundComponent},
  {path: 'selectors', component: SelectorsComponent},
  {path: 'stacking', component: StackingComponent},
  {path: 'xml', component: XmlComponent},
  {path: 'flex', component: FlexComponent},
  {path: 'grid', component: GridComponent},
];

const routeOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 0],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
