import express from 'express';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import cors from 'cors';

import IHero from '../interfaces/IHero';

const HEROES: IHero[] = [
	{ id: 1, name: 'Windstorm', power: 'None' },
	{ id: 2, name: 'The Sensational Fighter', power: 'None' },
	{ id: 3, name: 'Captain Quill', power: 'None' },
	{ id: 4, name: 'The Azure Tiger', power: 'None' },
	{ id: 5, name: 'Uber Cat', power: 'None' },
	{ id: 6, name: 'The Atom Warrior', power: 'None' }
];
let lastId = 6;

// Create a new express application instance
const app: express.Application = express();

app.use(bodyParser.json());
app.use(cors());

app.use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
	const date = new Date();
	console.log(
		`${chalk.grey(
			date.getDate().toString() +
				'-' +
				date.getMonth().toString() +
				'-' +
				date.getFullYear().toString() +
				' ' +
				date.getHours().toString() +
				':' +
				date.getMinutes().toString() +
				':' +
				date.getSeconds().toString()
		)} [${chalk.blue(req.method)}] ${chalk.yellow(req.originalUrl)}`
	);
	next();
});

app.get('/', function(req: express.Request, res: express.Response) {
	res.send('Hello World!');
});

app.get('/api/heroes', function(req: express.Request, res: express.Response) {
	res.json(HEROES);
});

app.post('/api/hero', function(req: express.Request, res: express.Response) {
	if (req.body.name === undefined) {
		res.status(400).send('name is missing');
		return;
	}
	const newHero = {
		id: ++lastId,
		...req.body
	};
	HEROES.push(newHero);

	res.status(201).send(newHero);
});

app.put('/api/hero/:id', function(req: express.Request, res: express.Response) {
	const index = HEROES.findIndex(x => x.id === parseInt(req.params.id));

	if (req.body.name === undefined) {
		res.status(400).send('name is missing');
		return;
	}

	if (index !== -1) {
		HEROES[index].name = req.body.name;

		res.sendStatus(204);
	} else {
		res.status(400).send('cannot find item with id: ' + index);
	}
});

app.delete('/api/hero/:id', function(req: express.Request, res: express.Response) {
	const index = HEROES.findIndex(x => x.id === parseInt(req.params.id));

	if (index !== -1) {
		HEROES.splice(index, 1);
		res.sendStatus(204);
	} else {
		res.sendStatus(400);
	}
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
