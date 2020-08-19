import { Injectable } from '@angular/core';
import { DonateBlood,SearchBlood } from '../models/plasma-model'

@Injectable({
  providedIn: 'root'
})
export class PlasmaService {

  constructor() { }

  addDonarDetals(fullName : string, bloodGroup:string, gender:string,age:number,mobileNo:number,
    place:string,address:string,plasmaDonar:string){
      const donateBlood : DonateBlood ={
        name:fullName,
        bloodGroup:bloodGroup,
        gender:gender,
        age:age,
        mobileNumber:mobileNo,
        place:place,
        address:address,
        plasmaDonar:plasmaDonar,
      }
      alert("Thank you "+ donateBlood.name + " for registering.");
    }
}
