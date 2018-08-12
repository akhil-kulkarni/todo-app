let Items = require('./items.model.js');

let itemMethods = {
	getItemsInList: (listId, limit) => {
		if(limit)
			return Items.find({listId: listId, isDeleted: false}).sort({createdDate: "asc"}).limit(limit).exec();
		return Items.find({listId: listId, isDeleted: false}).sort({createdDate: "asc"}).exec();
	},

	getAllItemsInList: (listId) => {
		return itemMethods.getItemsInList(listId).then((res) => {
			return({ msg: res, resp: 'S' });
		}).catch((err) => {
			return({ msg: err, resp: 'F' });
		});
	},

	updateItemName: (listId, itemId, itemName, modifiedDate) => {
		return Items.update({_id: itemId, listId: listId}, {itemName: itemName, isChanged: true, modifiedDate: modifiedDate}).exec();
	},

	addItemToList: (listId, itemName) => {
		let item = new Items({listId: listId, itemName: itemName});
		return item.save();
	},

	updateItemList: (listId, itemId, itemName) => {
		if(listId) {
			if(itemId){
				let modifiedDate = new Date();
				return itemMethods.updateItemName(listId, itemId, itemName, modifiedDate).then((res) => {
					res.modifiedDate = modifiedDate;
					return({ msg: res, resp: 'S' });
				}).catch((err) => {
					return({ msg: err, resp: 'F' });
				});
			}
			return itemMethods.addItemToList(listId, itemName).then((res) => {
				return({ msg: res, resp: 'S' });
			}).catch((err) => {
				return({ msg: err, resp: 'F' });
			});
		}
		else {
			return({ msg: 'list id was not provided', resp: 'F' });
		}
	},

	markItemDeleted: (listId, itemId, deletedDate) => {
		return Items.update({_id: itemId, listId: listId}, {isDeleted: true, deletedDate: deletedDate}).exec();
	},

	deleteItemFromList: (listId, itemId) => {
		if(listId) {
			if(itemId){
				let deletedDate = new Date();
				return itemMethods.markItemDeleted(listId, itemId, deletedDate).then((res) => {
					res.deletedDate = deletedDate;
					return({ msg: res, resp: 'S' });
				}).catch((err) => {
					return({ msg: err, resp: 'F' });
				});
			}
			else {
				return({ msg: 'item id was not provided', resp: 'F' });
			}
		}
		else {
			return({ msg: 'list id was not provided', resp: 'F' });
		}
	}
}

module.exports = itemMethods;
