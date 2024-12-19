import { disableDebugTools } from "@angular/platform-browser";

export class PermitModel {
    userId: number;
    adsType: string;
    brandingType: string;
    brandingYear: Date;
    adsPeriod: string;
    vehicleType: string;
    noOfVehicle: string;
    startDate: Date;
    endDate: Date;
    status: string;
    action: string;
    name: string;
    email: string;
    phoneNo: string;
    address: string;

    constructor() {
        this.userId = 0;
        this.adsType = "";
        this.brandingType = "";
        this.brandingYear = new Date();
        this.adsPeriod = "";
        this.vehicleType = "";
        this.noOfVehicle = "";
        this.startDate  = new Date();
        this.endDate = new Date();
        this.status = "";
        this.action = "";
        this.name = "";
        this.email = "";
        this.address = "";
        this.phoneNo = "";
    }

}
