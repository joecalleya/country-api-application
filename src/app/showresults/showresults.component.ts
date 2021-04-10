import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showresults',
  templateUrl: './showresults.component.html',
  styleUrls: ['./showresults.component.scss']
})
export class ShowresultsComponent implements OnInit {

  @Input() searchResult: any;


  constructor() { }

  ngOnInit(): void {
  }

}
