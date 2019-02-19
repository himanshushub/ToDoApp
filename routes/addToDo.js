module.exports = (app)=> {
    app.post('/api/addtodo', (req,res)=>{
        // console.log(req.user);
        console.log(req.body);
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