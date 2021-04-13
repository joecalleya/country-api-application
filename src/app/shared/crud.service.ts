import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  
  constructor(private httpClient: HttpClient) {
  }
  //this function will access to API and parse search criteria
  getCountryData(searchText: any) {
    return this.httpClient.get(`http://api.worldbank.org/v2/country/${searchText}?format=json`).toPromise()
  }
}
