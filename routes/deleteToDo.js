const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Usermodel = mongoose.model('users');



module.exports = (app)=>{
    app.post('/api/deletetodo', requireLogin, (req, res)=> {
        // console.log(req.body);
        req.user.ToDolist = req.body;
        // console.log(req.user);
        req.user.save()
            .then((user)=> {
                res.send(user);
        })
        // Usermodel.update(
        //     {_id: req.user.id},
        //     {$pull: {ToDolist:{priority: req.body.priority}}},
        //     function(err, afterdeleteToDo){
        //         console.log(afterdeleteToDo);
        //     }
        // )
        
        // console.log(req.user);

        // req.user.deleteOne(req.body, (e)=>{
        //     console.log(e);
        // })

    })
}