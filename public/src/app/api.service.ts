import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Poll } from './poll';
import "rxjs/Rx";

@Injectable()
export class ApiService {

  private _polls: Poll[] = [];

  loggedIn = "";

  constructor(
    private _http: Http,
  ) {
    this.getPolls();  //get polls and store in service
  }

  grabPolls(){
    return this._polls;
  }

  whoLogin(){
    return this.loggedIn;
  }

  login(user) {
    this.loggedIn = user;
    console.log("User logged in: " + this.loggedIn)
  }

  getPolls(){
    console.log("Showing all polls")
    var allPolls = this._http.get('/questions')
    .map( data => data.json() )
    .toPromise()
    // console.log(allPolls);

    
    allPolls.then(data=>{      //cleans up the initial response data from service
      console.log(data);
      for(var i =0; i<data['question'].length; i++){

        var newPoll = new Poll(
          data['question'][i].user,
          data['question'][i].question,
          data['question'][i].q1,
          data['question'][i].q1vote,
          data['question'][i].q2,
          data['question'][i].q2vote,
          data['question'][i].q3,
          data['question'][i].q3vote,
          data['question'][i].q4,
          data['question'][i].q4vote,
          data['question'][i].created_at,
          data['question'][i]._id,
        ); // create a new Poll from response
        this._polls.push(newPoll); //push new poll in line above to an array in component
      }
      console.log(this._polls);
    })
    .catch(err => {
      console.log(`Error from showsNotes function in service: ${err}`);
    })
  }

  logout(){
    this.loggedIn="";
    console.log("User logged in is now logged out: "+this.loggedIn);
  }

  createPoll(poll) {
    console.log("Poll created in service!")
    this._polls.push(poll);

    this._http.post('/questions', poll).toPromise()
      .then(data => {
        console.log("inside then of promise in post")
        console.log(data)
      })
      .catch(err => {
        console.log("in api service promise catch")
        console.log(err)
      });
  }

  retrievePoll(callback){
    callback(this._polls);
  }

  delete(id){
    console.log(id);
    this._http.delete('/questions', id).toPromise()
    .then(data => {
      console.log("inside then of promise in delete")
      console.log(data)
    })
    .catch( err =>{
      console.log("in api service promise catch in delete")
      console.log(err)
    })
  }

}
