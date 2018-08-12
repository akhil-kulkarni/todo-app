let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let listsSchema = new Schema({
	listName: { type: String, required: true },
	createdDate: { type: Date, default: Date.now },
	isComplete: { type: Boolean, default: false },
	completionDate: Date,
	isChanged: { type: Boolean, default: false },
	modifiedDate: Date,
	prevListName: String,
	isDeleted: { type: Boolean, default: false },
	deletedDate: Date
});

listsSchema.methods.toString = function() {
	console.log("\n\n------ List Start ------\n");
	console.log("List Name: " + this.listName);
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
	console.log("\n------ List End ------\n\n");
};

module.exports = mongoose.model('Lists', listsSchema);
