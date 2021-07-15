const Service = require("./_service");
const db = require("../db");

describe("testing parent service root class", () => {
	let Xoxo;

	beforeAll(() => {
		Xoxo = new Service("Xoxo");
	});

	afterAll(() => {
		db.delete("/Xoxo");
	});

	test("Add a test json record into Xoxo main key (as a Model) ", () => {
		Xoxo.create({ id: 17, title: "This is a title" });
	});

	test("List records of Xoxo model", () => {
		expect(Xoxo.list()).toHaveLength(1);
	});

	test("Read record from Xoxo model", () => {
		let xoxo = Xoxo.read(17);
		expect(xoxo).toEqual({ id: 17, title: "This is a title" });
	});

	test("Update the record", () => {
		Xoxo.update(17, { title: "edited" });
		expect(Xoxo.read(17)).toEqual({ id: 17, title: "edited" });
	});

	test("Update invalid record", () => {
		expect(Xoxo.update(18, { title: "edited" })).toBe(false);
	});

	test("Delete a record", () => {
		expect(Xoxo.delete(17)).toBe(true);
		expect(Xoxo.delete(17)).toBe(false);
	});
});
