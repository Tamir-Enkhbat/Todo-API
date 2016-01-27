var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Go to class',
    completed: false
}, {
    id: 2,
    description: 'Go home',
    completed: false
}, {
    id: 3,
    description: 'Eat',
    completed: true
}];
app.get('/', function (req, res) {
    res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
    res.json(todos);
});

app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var retTodo;
    todos.forEach(function (value) {
        if(todoId === value.id){
            retTodo = value;
        }
    });
    if(typeof retTodo === 'undefined') {
        res.status(404).send('Todo not found');
    } else {
        res.json(retTodo);
    }
});
app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT);
});