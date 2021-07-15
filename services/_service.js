const db = require("../db");

class Service {
	constructor(model) {
		this.model = model;
	}

	create(data) {
		return db.push(`/${this.model}[]`, data);
	}

	read(id) {
		let index = db.getIndex(`/${this.model}`, id);
		if (index === -1) return false;
		return db.getData(`/${this.model}[${index}]`);
	}

	update(id, data) {
		let index = db.getIndex(`/${this.model}`, id);
		if (index === -1) return false;
		db.push(`/${this.model}[${index}]`, { id, ...data });
		return true;
	}

	delete(id) {
		let index = db.getIndex(`/${this.model}`, id);
		if (index === -1) return false;
		db.delete(`/${this.model}[${index}]`);
		return true;
	}

	list() {
		return db.getData(`/${this.model}`);
	}
}

module.exports = Service;
