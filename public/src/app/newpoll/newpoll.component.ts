import { Component, OnInit } from '@angular/core';
import { Poll } from './../poll';
import { ApiService } from './../api.service';
import { RouterModule, Routes, Router }  from '@angular/router';


@Component({
  selector: 'app-newpoll',
  templateUrl: './newpoll.component.html',
  styleUrls: ['./newpoll.component.css']
})
export class NewpollComponent implements OnInit {

  poll: Poll=new Poll(
    "", //user
    "", //question
    "", //q1
    0, //q1 vote
    "", //q2
    0, //q2 vote
    "", //q3
    0, //q3 vote
    "", //q4
    0, //q4 vote
    "", //created_at
    "", //id
  );
  
    constructor(
      private _apiService: ApiService,
      private router: Router,
    ) {
      console.log(this._apiService.whoLogin());
    }
  
    onSubmit(){
      // console.log(this._apiService.whoLogin());
      this.poll.user = this._apiService.whoLogin();
      this.poll.created_at = new Date();
      this.poll.q1vote = 0;
      this.poll.q2vote = 0;
      this.poll.q3vote = 0;
      this.poll.q4vote = 0;
      console.log("Form looks like this " + this.poll);
      this._apiService.createPoll(this.poll);
      this.poll = new Poll(
      "", //user
      "", //question
      "", //q1
      0, //q1 vote
      "", //q2
      0, //q2 vote
      "", //q3
      0, //q3 vote
      "", //q4
      0, //q4 vote
      "", //created_at
      "", //id
    );
    this.router.navigateByUrl("/polls");
    }
  
    ngOnInit() {
    }
  
  }  