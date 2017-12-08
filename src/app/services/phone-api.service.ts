import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment'


export class Phone{
  name:  string;
  brand: string;
  image: string;
  specs: string[];


  // this are assigned by the database
  _id:       string;
  createdAt: string;
  updatedAt: string;
}


@Injectable()
export class PhoneApiService {

  constructor(private httpThang: HttpClient) { }

  // GET /api/phones
  getPhone() {
     return this.httpThang.get(`${environment.backendUrl}/api/phones`).toPromise()
}

  // POST /api/phones

  // GET /api/phones/:id
  getOnePhone(oneId: string) {
  return this.httpThang.get(
    `${environment.backendUrl}/api/phones/${oneId}`
  ).toPromise();
}

  // DELETE /api/phones/:id
   deleteOnePhone(oneId: string) {
   return this.httpThang.delete(
     `${environment.backendUrl}/api/phone/${oneId}`
   ).toPromise();

 }
}
