const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

User.findById('5c462952a583aaaccb958b82').then((result) => {
	if(!result) {
		return console.log('Unable to find user');
	}
	console.log(JSON.stringify(result, undefined, 2));
}, (error) => {
	console.log('Error:', error);
});

// const id = '6c46331161b4eaadc6cb2721X';
//
// if(!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }
//
// Todo.find({
// 	_id: id
// }).then((results) => {
// 	console.log('Results', results)
// });
//
// Todo.findOne({
// 	_id: id
// }).then((result) => {
// 	console.log('Result', result)
// });
//
// Todo.findById(id).then((result) => {
// 	if(!result) {
// 		return console.log('Result not found');
// 	}
// 	console.log('Result', result)
// }).catch((error) => console.log(error));





