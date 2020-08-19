import { Component, OnInit } from '@angular/core';
import { PlasmaService } from '../services/plasma.service'

@Component({
  selector: 'app-donate-blood',
  templateUrl: './donate-blood.component.html',
  styleUrls: ['./donate-blood.component.css']
})
export class DonateBloodComponent implements OnInit {

  constructor(public plasmaService : PlasmaService ) { }

  ngOnInit(): void {
  }
  blood = ['A+',"A-",'B+',"B-","O+","O-","AB+","AB-","A1-","A1+","A2+","A2-","A1B+","A1B-","A2B+","A2B-","Bombay Blood Group"];
  placeList = [ 'B.H.E.L','Miyapur','Madhapur','Kondapur','Banjarahills','Jublihills', 'K.P.H.B', 'Kukatpally', 'Motinagar','Ameerpet',
               'Yousufguda','Panjagutta','Mehdipatnam', 'Khairatabad','Lakdikapol','Nampally','Abids','Malakpet','Dilsukhnagar', 'L.B.Nagar',
               'Vanasthalipuram','Kachiguda', 'Himayatnagar', 'Amberpet','Charminar', 'Toli Chowki','Manikonda', 'Gachibowli', 'Bolarum','Alwal',
               'Tirmulgherry','Bowenpally','Maredpally', 'Sainikpuri','A.S.Rao Nagar','E.C.I.L','Begumpet','Musheerabad', 'Karkhana',
               'Malkajgiri', 'Nacharam','Cherlapally','Uppal', 'Tarnaka', 'Jeedimetla', 'Rajendra Nagar', 'Chandrayanagutta', 'Hyderabad',
                'Secunderabad','Dist: ADILABAD','Dist: Adilabad', 'Dist: Kadapa', 'Dist: East Godavari', 'Dist: Guntur', 'Dist: Karimnagar',
                 'Dist: Khammam', 'Dist: Krishna','Dist: Kurnool','Dist: Mahbubnagar', 'Dist: Medak', 'Dist: Nalgonda', 'Dist: Nellore', 
                 'Dist: Nizamabad', 'Dist: Prakasam', 'Dist: Rangareddi', 'Dist: Srikakulam', 'Dist: Visakhapatnam', 'Dist: Vizianagaram',
                 'Dist: Warangal', 'Dist: West Godavari'];
                 resetForm;
  onSubmit(donarForm:any){
    // alert(donarForm.fullName + donarForm.bloodGroup + donarForm.gender + donarForm.age + donarForm.mobileNumber + donarForm.place + donarForm.address + donarForm.plasmaDonar);
    this.plasmaService.addDonarDetals(donarForm.fullName ,donarForm.bloodGroup,donarForm.gender,donarForm.age,
      donarForm.mobileNumber , donarForm.place , donarForm.address , donarForm.plasmaDonar )
      this.resetForm= <HTMLFormElement>document.getElementById('donarFromDetails');
      this.resetForm.reset();
  }
}
