import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-donar',
  templateUrl: './search-donar.component.html',
  styleUrls: ['./search-donar.component.css']
})
export class SearchDonarComponent implements OnInit {
  displaySearchList : boolean;
  constructor() { }

  ngOnInit(): void {
    this.displaySearchList = false;
  }


  bloodList = ['A+',"A-",'B+',"B-","O+","O-","AB+","AB-","A1-","A1+","A2+","A2-","A1B+","A1B-","A2B+","A2B-","Bombay Blood Group"];
  placeList = [ 'B.H.E.L','Miyapur','Madhapur','Kondapur','Banjarahills','Jublihills', 'K.P.H.B', 'Kukatpally', 'Motinagar','Ameerpet',
  'Yousufguda','Panjagutta','Mehdipatnam', 'Khairatabad','Lakdikapol','Nampally','Abids','Malakpet','Dilsukhnagar', 'L.B.Nagar',
  'Vanasthalipuram','Kachiguda', 'Himayatnagar', 'Amberpet','Charminar', 'Toli Chowki','Manikonda', 'Gachibowli', 'Bolarum','Alwal',
  'Tirmulgherry','Bowenpally','Maredpally', 'Sainikpuri','A.S.Rao Nagar','E.C.I.L','Begumpet','Musheerabad', 'Karkhana',
  'Malkajgiri', 'Nacharam','Cherlapally','Uppal', 'Tarnaka', 'Jeedimetla', 'Rajendra Nagar', 'Chandrayanagutta', 'Hyderabad',
   'Secunderabad','Dist: ADILABAD','Dist: Adilabad', 'Dist: Kadapa', 'Dist: East Godavari', 'Dist: Guntur', 'Dist: Karimnagar',
    'Dist: Khammam', 'Dist: Krishna','Dist: Kurnool','Dist: Mahbubnagar', 'Dist: Medak', 'Dist: Nalgonda', 'Dist: Nellore', 
    'Dist: Nizamabad', 'Dist: Prakasam', 'Dist: Rangareddi', 'Dist: Srikakulam', 'Dist: Visakhapatnam', 'Dist: Vizianagaram',
    'Dist: Warangal', 'Dist: West Godavari'];
    searchTableHeader = ["Name","Blood Group","Mobile No","Place","COVID Plasma Donar"]

    donarData = [
      {
        "name" : "Venkat Naren",
        "bloodGroup" : "O+",
        "mobileNumber" : "9848022338",
        "place" : "Hyderabad",
        "covidDonar" : "Yes"
      },
      {
        "name" : "Sai Krishna",
        "bloodGroup" : "AB+",
        "mobileNumber" : "9848022338",
        "place" : "Nizamabad",
        "covidDonar" : "No"
      },
      {
        "name" : "Sri Ranga Ram Mohan",
        "bloodGroup" : "A+",
        "mobileNumber" : "9848022338",
        "place" : "Vanasthalipuram",
        "covidDonar" : "Yes"
      },
      {
        "name" : "Hari Krishna",
        "bloodGroup" : "AB+",
        "mobileNumber" : "9848022338",
        "place" : "Maredpally",
        "covidDonar" : "No"
      },
      {
        "name" : "Shiva Shankar Akula",
        "bloodGroup" : "B+",
        "mobileNumber" : "9848022338",
        "place" : "Sainikpuri",
        "covidDonar" : "Yes"
      },
      {
        "name" : "saai aakaash",
        "bloodGroup" : "B-",
        "mobileNumber" : "9848022338",
        "place" : "Himayatnagar",
        "covidDonar" : "Yes"
      },
      {
        "name" : "Aakhil ahammed Shaik",
        "bloodGroup" : "AB+",
        "mobileNumber" : "9848022338",
        "place" : "Nizamabad",
        "covidDonar" : "No"
      },
      {
        "name" : "Abhinav Parvathaneni	",
        "bloodGroup" : "O-",
        "mobileNumber" : "9848022338",
        "place" : "Sainikpuri",
        "covidDonar" : "Yes"
      },
      {
        "name" : "Danagalla abhishekva	",
        "bloodGroup" : "A1B-",
        "mobileNumber" : "9848022338",
        "place" : "Banjarahills",
        "covidDonar" : "Yes"
      },
    ];
    
  onSearchSubmit(searchDonarDetails : any){
    console.log(searchDonarDetails);
    this.displaySearchList = true;
  }
}
