//list of all student names

//list of all tasks

//object of student -> id, name, task, diff, fun

//object of task, id, title, difficulty, fun

function DataHandler(requested) {
	const data = require('../data/students-feedback.json');
	switch (requested) {
		case 'raw':
			return data;

		case 'students':
			return [...new Set(data.map(student => student.name))];

		case 'program':
			return data.reduce((acc, item) => {
				if (acc.includes(item.task)) {
					return acc;
				} else {
					return acc.concat(item.task);
				}
			}, []);

		default:
			return null;
	}
}

export default DataHandler;
