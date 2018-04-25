import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeService } from './../../services/home/home.service';
import { PlanetsComponent } from './planets/planets.component';
import { HomeComponent } from './home.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SharedModule } from '../../shared/shared.module';
import { ProblemComponent } from './problem/problem.component';
import { ProblemService } from '../../services/problem/problem.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [HomeComponent, PlanetsComponent, VehiclesComponent, ProblemComponent],
  providers: [HomeService, ProblemService]
})
export class HomeModule { }
