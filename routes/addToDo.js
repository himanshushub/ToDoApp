const requireLogin = require('../middlewares/requireLogin');

module.exports = (app)=> {
    app.post('/api/addtodo', requireLogin, (req,res)=>{
        // console.log(req.user.ToDolist);
        // console.log(req.body);
        let p = { 
                    priority : req.body.Priority,
                    ToDo: req.body.List        
                }
        req.user.ToDolist.push(p);
        req.user.save()
            .then((user)=> {
                res.send(user);
        })
    })
}