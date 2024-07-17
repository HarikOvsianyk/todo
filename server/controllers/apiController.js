const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:uname', function (req, res) {
        Todos.find({ username: req.params.uname })
            .then((todos) => {
                  res.send(todos);
            })
            .catch((err) => {
                if (err) throw err;
            })

    });

    app.get('/api/todo/:id', function (req, res) {
        Todos.findById({ _id: req.params.id })
            .then((todo) => {
                res.send(todo);
            })
            .catch((err) => {
                if (err) throw err;
            })
    });

    app.post('/api/todo', function (req, res) {
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            })
            .then(() => {
                res.send('Success');
            })
            .catch((err) => {
                if (err) throw err;
            })
        } else {
            const newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save()
            .then(() => {
                res.send('Success');
            })
            .catch((err) => {
                if (err) throw err;
            })
        }
    });

    app.delete('/api/todo/:id', function (req, res) {
        Todos.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log(req);
            res.send('Success');
        })
        .catch((err) => {
            console.error(err); 
            res.status(500).send('Internal Server Error');
        });
    });
    
}

