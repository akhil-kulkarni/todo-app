let Lists = require('./lists.model.js');

let listMethods = {

	updateListName: (listId, listName, modifiedDate) => {
		return Lists.update({_id: listId}, {listName: listName, isChanged: true, modifiedDate: modifiedDate}).exec();
	},

	addNewList: (listName) => {
		let list = new Lists({listName: listName});
		return list.save();
	},

	updateList: (listId, listName) => {
		if(listId) {
			let modifiedDate = new Date();
			return listMethods.updateListName(listId, listName, modifiedDate).then((res) => {
				res.modifiedDate = modifiedDate;
				return({ msg: res, resp: 'S' });
			}).catch((err) => {
				return({ msg: err, resp: 'F' });
			});
		}
		else {
			return listMethods.addNewList(listName).then((res) => {
				return({ msg: res, resp: 'S' });
			}).catch((err) => {
				return({ msg: err, resp: 'F' });
			});
		}
	},

	markListDeleted: (listId, deletedDate) => {
		return Lists.update({_id: listId}, {isDeleted: true, deletedDate: deletedDate}).exec();
	},

	deleteList: (listId, itemId) => {
		if(listId) {
			let deletedDate = new Date();
			return listMethods.markListDeleted(listId, deletedDate).then((res) => {
				res.deletedDate = deletedDate;
				return({ msg: res, resp: 'S' });
			}).catch((err) => {
				return({ msg: err, resp: 'F' });
			});
		}
		else {
			return({ msg: 'list id was not provided', resp: 'F' });
		}
	},


	getListForThumb: async (id, listName, isComplete, items) => {
		if(typeof id !== 'undefined' && id) {
			let itemList = await items.getItemsInList(id, 5).catch((err) => {
				return err;
			});
			let response = {
				id: id,
				listName: listName,
				listItems: itemList,
				isComplete: isComplete
			};
			return(response); // { msg: response, resp: 'S' }
		}
		else {
			return({ msg: 'list id was not provided', resp: 'F' });
		}
	},

	getThumbnailLists: async (items) => {
		let listArr = [];
		let _lists = await Lists.find({isDeleted: false}).sort({createdDate: 'asc'}).exec();
		for(let i=0; i<_lists.length; i++) {
			let list = _lists[i];
			let respList = await listMethods.getListForThumb(list._id, list.listName, list.isComplete, items).catch((err)=>{
				return err;
			});
			if(respList) {
				listArr.push(respList);
			}
		}
		return({ msg: listArr, resp: 'S' });
	}

};


module.exports = listMethods;
