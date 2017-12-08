import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { PhoneApiService, Phone } from '../services/phone-api.service';


@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phoneInfo = new Phone();

  constructor(
    private activatedThang: ActivatedRoute,
    private phoneThang: PhoneApiService,
    private routerThang: Router ){ }

  ngOnInit() {
    // Get the URL parameters of this route
     this.activatedThang.params.subscribe((myReqParams) => {
          //      { path: 'phone/_id'}
          //                      ||
          console.log(myReqParams.id);

          this.startAjaxCall(myReqParams.id);

     });
  }

  startAjaxCall(id) {
    this.phoneThang.getOnePhone(id)
    .then((phoneResults: Phone) => {
      this.phoneInfo = phoneResults;
    })
    .catch((err) => {
      console.log("ERROR! ERROR!");
      console.log(err)
    });
  }

  startDeleteAjax(id) {

    if (!confirm('Are you sure')) {
      return;
    }


    this.phoneThang.deleteOnePhone(this.phoneInfo._id)
    .then(() => {
      // what if the phone is delete successfl
      console.log("delete successfl");

      this.routerThang.navigate(['/phone']);

    })
    .catch((err) => {
      console.log("Phone delete error");
      console.log(err)
    })
  }//startDeleteAjax


}
