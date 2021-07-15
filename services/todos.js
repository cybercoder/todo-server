const rootService = require("./_service");

class TodosService extends rootService {
	constructor() {
		super("todos");
	}
}

module.exports = new TodosService();
