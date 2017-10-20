import { Component, OnInit, Input } from '@angular/core';
import { Poll } from './../poll';
import { ApiService } from './../api.service';
import { RouterModule, Routes, Router, ActivatedRoute, ParamMap }  from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() polls;

  questionList: Array<Poll> = [];
  question;
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
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this._apiService.retrievePoll((list) => {
      this.questionList = list;
    });
    this._route.params.subscribe( param => {
      for ( let i = 0; i < this.questionList.length; i++){
        if(this.questionList[i]._id == param.id){
          this.question = this.questionList[i];  //Setting question to our selected id
          break;
        }
      }
    })
    console.log(this.questionList);
    console.log(this.question);
  }

  ngOnInit() {
    // this._apiService.displayPoll(params.get('id'))
  }

  vote(vote){
    if(vote== "q1vote"){
      vote.q1vote ++;
    } else if (vote == "q2vote"){
      vote.q2vote ++;
    } else if (vote == "q3vote"){
      vote.q3vote ++;
    } else {
      vote.q4vote ++;
    }
  }

}
