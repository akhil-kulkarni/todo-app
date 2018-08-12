let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let itemsSchema = new Schema({
	listId: Schema.Types.ObjectId,
	itemName: { type: String, required: true },
	createdDate: { type: Date, default: Date.now },
	isComplete: { type: Boolean, default: false },
	completionDate: Date,
	isChanged: { type: Boolean, default: false },
	modifiedDate: Date,
	prevItemName: String,
	isDeleted: { type: Boolean, default: false },
	deletionDate: Date
});

itemsSchema.methods.toString = () => {
	console.log("\n\n------ Item Start ------\n");
	console.log("List ID: " + this.listId);
	console.log("Item Name: " + this.itemName);
	console.log("Created On: " + this.createdDate);
	console.log("Completion Flag: " + this.isComplete);
	if(this.isComplete) {
		console.log("Completion Date: " + this.completionDate);
	}
	console.log("Modified Flag: " + this.isChanged);
	if(this.isChanged) {
		console.log("Modification Date: " + this.modifiedDate);
	}
	console.log("Deleted Flag: " + this.isDeleted);
	if(this.isDeleted) {
		console.log("Deleted Date: " + this.deletedDate);
	}
	console.log("\n------ Item End ------\n\n");
};

module.exports = mongoose.model('Items', itemsSchema);
