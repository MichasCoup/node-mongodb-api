const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

/*
	db.collection('Todos').find({
		_id: new ObjectID('5c44c4f120a511d464846351')
	}).toArray().then( (docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2))
	}, (err) => {
		console.log('Unable to fetch todos', err)
	});



	db.collection('Todos').find({completed: true}).count().then( (count) => {
		console.log(`Todos count ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos', err)
	});
*/

	db.collection('Users').find({name: 'Micha'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	});


	client.close();
});