import { Component, OnInit } from '@angular/core';
import { PhoneApiService, Phone } from '../services/phone-api.service'

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: Phone[] = [];

  constructor(private phoneThang: PhoneApiService) { }

  ngOnInit() {
    this.phoneThang.getPhone()
    .then((phoneResults: Phone[]) => {
       console.log("Phone List API");
       console.log(phoneResults);

       //THE MAGIC HAPPENS HERE
       //(assign API result to component property)
       this.phones = phoneResults;
    })
    .catch((err) => {
      alert("BAD WRITE");
      console.log("ERROR! ERROR!");
      console.log(err);
    });
  }// ngOnInit

}
