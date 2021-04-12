import { Component, Output , OnInit, EventEmitter } from '@angular/core';
import { CrudService } from "../shared/crud.service";

interface searchResult {
  adminregion: object
  capitalCity: string
  id: string
  incomeLevel: object
  iso2Code: string
  latitude: number
  lendingtype: object
  longditude: number
  name: string
  region: object
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string;
  searchResult: searchResult;

  // create an event for when you add the search .
  @Output() onItemSearch = new EventEmitter<string>();

  constructor(
    public crudService: CrudService
  ) {
    
    this.searchResult = {
      adminregion: [],
      capitalCity: '',
      id: '',
      incomeLevel: [],
      iso2Code: '',
      latitude: 0,
      lendingtype: [],
      longditude: 0,
      name: '',
      region: []
  }
    this.searchText = '';
  }

  handleSearch() {
    const searchFor = this.searchText;
    this.onItemSearch.emit(searchFor);

    this.crudService.getCountryData(this.searchText).then((response: any) => {
      //first row of response is metadata - remove this
      this.searchResult = response[1];
      //if it value then keep the response
      console.log("returned", (this.searchResult))
    });
  }
  
  ngOnInit(): void {
  }

}
