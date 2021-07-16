const db = require("../db");

/**
 * JSDOC inline ...
 */
class Service {
	/**
	 * constructor
	 * @param {string} model - model name.
	 */
	constructor(model) {
		this.model = model;
	}

	/**
	 * create
	 * @param {object} data
	 */
	create(data) {
		let { id } =
			db.count(`/${this.model}`) > 0 ? db.getData(`/${this.model}[-1]`) : 0;
		return db.push(`/${this.model}[]`, {
			id: (parseInt(id) || 0) + 1,
			...data,
		});
	}

	read(id) {
		let index = db.getIndex(`/${this.model}`, parseInt(id));
		if (index === -1) return false;
		return db.getData(`/${this.model}[${index}]`);
	}

	update(id, data) {
		let index = db.getIndex(`/${this.model}`, parseInt(id));
		if (index === -1) return false;
		db.push(`/${this.model}[${index}]`, { id: parseInt(id), ...data });
		return true;
	}

	delete(id) {
		let index = db.getIndex(`/${this.model}`, parseInt(id));
		if (index === -1) return false;
		db.delete(`/${this.model}[${index}]`);
		return true;
	}

	list({ filter = null } = {}) {
		if (!filter || filter === 'null')
			return db.getData(`/${this.model}`);
		return db.getData(`/${this.model}`).filter((item) => item.status===filter);
	}
}

module.exports = Service;
