const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

// Todo.deleteMany({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()
// Todo.findByIdAndRemove()
Todo.findOneAndDelete({_id: "5c48ed600a5ed7b9493ca041"}).then((todo) => {
	console.log(todo);
});