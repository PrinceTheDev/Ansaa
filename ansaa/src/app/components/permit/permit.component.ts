import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { PermitModel } from '../../model/permit';

@Component({
  selector: 'app-permit',
  standalone: true,
  imports: [DatePipe,ReactiveFormsModule, CommonModule],
  templateUrl: './permit.component.html',
  styleUrl: './permit.component.css'
})
export class PermitComponent implements OnInit {

  currentDate: Date = new Date();
  permitForm: FormGroup = new FormGroup({});

  permitObj: PermitModel = new PermitModel();
  permitList: PermitModel[] = [];

  showContinueButton: boolean  = true;
  showEditButton: boolean = false;
  showSubmitButton: boolean = false;
  isEditable: boolean = false;

  ngOnInit(): void {
    
  }

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

  onContinue() {
    // this will store the data temporarily in localStorage
    localStorage.setItem('permitData', JSON.stringify(this.permitForm.value));

    // display the stored data in the modal
    const storedData = localStorage.getItem('permitData');
    if (storedData) {
    this.permitForm.patchValue(JSON.parse(storedData));
    }

    //update the modal controls
    this.showContinueButton = false;
    this.showEditButton = true;
    this.showSubmitButton = true;
    // This will make the data read only
    this.isEditable = false;
  }


  onEdit(){
    // Enable editing of the formm when clicked
    this.isEditable = true;
  }

  onSubmit(){
    // This will save the data permanentl on the localStorage
    const editedData = this.permitForm.value;
    localStorage.setItem('finalPermitData', JSON.stringify(editedData));
    //redirect user to updated table with the form
    // this.redirectToUpdatedTable
  }

  // redirectToUpdatedTable() {
  //   this.router.navigate([/table]);
  // }



}
