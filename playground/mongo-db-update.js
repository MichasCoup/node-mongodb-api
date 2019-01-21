const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').findOneAndUpdate(
	// 	{_id: new ObjectID('5c44cefe20a511d46484650f')},
	// 	{$set: {completed: true}},
	// 	{returnOriginal: false}
	// ).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate(
		{_id: new ObjectID('5c44c1743c08dfa6f13a5b03')},    // FIND
		{$set: {name: 'Micha'}, $inc: {age: 2}},            // To UPDATE
		{returnOriginal: false}                             // OPTIONS
	).then((result) => {
		console.log(result);
	});


	client.close();
});
