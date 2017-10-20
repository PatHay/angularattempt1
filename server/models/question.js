var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    user: {type: String, required: true},
    question: { type: String, required: true },
    q1: { type: String, required: true },
    q1vote: { type: Number },
    q2: { type: String, required: true },
    q2vote: { type: Number },
    q3: { type: String, required: true },
    q3vote: { type: Number },
    q4: { type: String, required: true },
    q4vote: { type: Number },
    created_at: {type: Date, default: Date.now},
   })

var question = mongoose.model('Question', QuestionSchema);