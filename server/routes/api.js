const express = require('express');

const router = express.Router();

const listMethods = require('../db/models/lists/lists.js');
const itemMethods = require('../db/models/items/items.js');

/* GET api listing. */
router.get('/', (req, res) => {
	console.log("api");
  res.send('api works');
});

router.get('/lists', (req, res) => {
	listMethods.getThumbnailLists(itemMethods).then((resp) => {
		console.log(resp);
		res.send(resp);
	}).catch((err) => {
		res.send(err);
	});
});

router.post('/lists', (req, res) => {
	listMethods.updateList(null, req.body.listName).then((resp) => {
		console.log(resp);
		res.send(resp);
	}).catch((err) => {
		res.send(err);
	});
});

router.put('/lists', (req, res) => {
	listMethods.updateList(req.query.listId, req.body.listName).then((resp) => {
		console.log(resp);
		res.send(resp);
	}).catch((err) => {
		res.send(err);
	});
});

router.delete('/lists', (req, res) => {
	listMethods.deleteList(req.query.listId).then((resp) => {
		console.log(resp);
		res.send(resp);
	}).catch((err) => {
		res.send(err);
	});
});

router.get('/items', (req, res) => {
	itemMethods.getAllItemsInList(req.query.listId).then((resp) => {
		console.log(resp);
		res.send(resp);
	}).catch((err) => {
		res.send(err);
	});
});

router.post('/items', (req, res) => {
	itemMethods.updateItemList(req.body.listId, null, req.body.itemName).then((resp) => {
		console.log(resp);
		res.send(resp);
	}).catch((err) => {
		res.send(err);
	});
});

router.put('/items', (req, res) => {
	itemMethods.updateItemList(req.query.listId, req.query.itemId, req.body.itemName).then((resp) => {
		console.log(resp);
		res.send(resp);
	}).catch((err) => {
		res.send(err);
	});
});

router.delete('/items', (req, res) => {
	itemMethods.deleteItemFromList(req.query.listId, req.query.itemId).then((resp) => {
		console.log(resp);
		res.send(resp);
	}).catch((err) => {
		res.send(err);
	});
});

module.exports = router;
