import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Poll } from './poll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  polls: Poll[];

  constructor(
    private _apiService: ApiService,
  ){
    this.polls = this._apiService.grabPolls();
  }



}
