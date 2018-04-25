import { Planets } from './../../../shared/models/planets';
import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../../services/problem/problem.service';
import { Vehicles } from '../../../shared/models/vehicles';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  planets: Planets;
  vehicles: Vehicles;
  problemForm: FormGroup;
  constructor(private problemService: ProblemService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.getAllPlanets();
    this.getAllVehicles();
  }
  /**
   * createForm - this function creates the form group problem form with all the form Controls.
   */
  createForm(): void {
    this.problemForm = this.formBuilder.group({
      planetOne: new FormControl('', Validators.required),
      planetTwo: new FormControl('', Validators.required),
      planetThree: new FormControl('', Validators.required),
      planetFour: new FormControl('', Validators.required),
      vehicleOne: new FormControl('', Validators.required),
      vehicleTwo: new FormControl('', Validators.required),
      vehicleThree: new FormControl('', Validators.required),
      vehicleFour: new FormControl('', Validators.required)
    });
  }
  /**
   * getAllPlanets - this function will fetch all the planets.
   */
  getAllPlanets(): void {
    this.problemService.getPlanets().subscribe(result => {
      if (result) {
        this.planets = new Planets();
        this.planets = result;
      }
    }, err => {
      console.log(err);
    });
  }
  /**
   * getAllVehicles - this function will fetch all the vehicles.
   */
  getAllVehicles(): void {
    this.problemService.getVehicles().subscribe(result => {
      if (result) {
        this.vehicles = new Vehicles();
        this.vehicles = result;
      }
    }, err => {
      console.log(err);
    });
  }
}
