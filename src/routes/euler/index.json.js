import problems from './_problems.js';

const contents = JSON.stringify(problems.map(problem => {
	return {
		title: problem.title,
		slug: problem.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}