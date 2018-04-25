import { PlanetsComponent } from './planets/planets.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ProblemComponent } from './problem/problem.component';

const childRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'planets', component: PlanetsComponent},
    {path: 'vehicles', component: VehiclesComponent},
    {path: 'problem', component: ProblemComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
