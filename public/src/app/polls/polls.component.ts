import { Component, OnInit, Input } from '@angular/core';
import { Poll } from './../poll';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  polls=[];
  login;

  constructor(
    private _apiService: ApiService,
  ) {
    this.polls = this._apiService.grabPolls();
    this.login = this._apiService.whoLogin();
    console.log(this.polls);
    console.log(this.login);
  }

  ngOnInit() {
  }

  onClick(){
    this._apiService.logout();
  }
  
  delete(id){
    this._apiService.delete(id);
  }
}
