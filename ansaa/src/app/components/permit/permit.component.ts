import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { PermitModel } from '../../model/permit';

@Component({
  selector: 'app-permit',
  standalone: true,
  imports: [DatePipe,ReactiveFormsModule],
  templateUrl: './permit.component.html',
  styleUrl: './permit.component.css'
})
export class PermitComponent {

  permitForm: FormGroup = new FormGroup({});

  permitObj: PermitModel = new PermitModel();

  constructor() {
    this.createForm();
  }

  createForm() {
    this.permitForm = new FormGroup({
      userid: new FormControl(this.permitObj.userId),
      adsType: new FormControl(this.permitObj.adsType),
      brandingType: new FormControl(this.permitObj.brandingType),
      brandingYear: new FormControl(this.permitObj.brandingYear),
      adsPeriod: new FormControl(this.permitObj.adsPeriod),
      vehicleType: new FormControl(this.permitObj.vehicleType),
      noOfVehicle: new FormControl(this.permitObj.noOfVehicle),
      startDate: new FormControl(this.permitObj.startDate),
      endDate: new FormControl(this.permitObj.endDate),
      status: new FormControl(this.permitObj.status),
      action: new FormControl(this.permitObj.action),
      name: new FormControl(this.permitObj.name),
      email: new FormControl(this.permitObj.email),
      phoneNo: new FormControl(this.permitObj.phoneNo),
      address: new FormControl(this.permitObj.address)

    })
  }

}
