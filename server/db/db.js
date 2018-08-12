var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-app-db');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
	console.log('connected biyatch!!');
});
