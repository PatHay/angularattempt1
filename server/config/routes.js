var questions = require('../controllers/questions.js');

module.exports = function (app) {

    app.get('/questions', (req,res,next)=>{
        console.log("get route working");
        questions.index(req, res);
    })

    app.post('/questions', (req, res, next)=>{
        console.log("create route working and posted to db");
        console.log(req.body);
        questions.new(req, res);
    });

    app.delete('/questions', (req, res, next)=> {
        console.log("delete route working");
        questions.remove(req, res);
    });

    app.get('*', function(req, res){
        res.sendFile('index.html', { root: './../public/dist' });
    });
};