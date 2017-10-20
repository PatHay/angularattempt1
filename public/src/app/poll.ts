export class Poll {
    user: string;
    question: string;
    q1: string;
    q1vote: number;
    q2: string;
    q2vote: number;
    q3: string;
    q3vote: number;
    q4: string;
    q4vote: number;
    created_at: Date;
    _id: any;

    constructor(
        user,
        question,
        q1,
        q1vote,
        q2,
        q2vote,
        q3,
        q3vote,
        q4,
        q4vote,
        created_at,
        _id
    ){
        this.user = user;
        this.question = question;
        this.q1 = q1;
        this.q1vote = q1vote;
        this.q2 = q2;
        this.q2vote = q2vote;
        this.q3 = q3;
        this.q3vote = q3vote;
        this.q4 = q4;
        this.q4vote = q4vote;
        this.created_at = created_at;
        this._id = _id;
    }
}