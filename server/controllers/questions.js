var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
    index: function(req, res){
        Question.find({}, function(err, question){
            if (err){
                console.log(`This is the error: ${err}`);
            }
            else{
                res.json({'question': question});
            }
        })
    },
    new: function(req, res){
        var question = new Question({
            user: req.body.user, 
            question: req.body.question,
            q1: req.body.q1,
            q2: req.body.q2,
            q3: req.body.q3,
            q4: req.body.q4,
            created_at: new Date(), 
        });
        question.save(function (err) {
            if (err) {
                console.log('something went wrong in add question');
                let errors = [];
                for (var key in err.errors){
                    errors.push(err.errors[key].message);
                }
                res.json({message: "Error", error: errors});
            } else {
                res.json({message:  "Success!", question: question});
            }
        });
    },

    remove: function(req, res){
        Question.remove({_id: req.body}, function(err){
            if(err){
                console.log("Did not delete record!");
                console.log(req.body);
            } else {
                console.log("Successfully deleted record!");
                res.json({message:  "Success!", question: question});
            }
        })
    }
}