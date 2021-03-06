const tape = require('tape');
const jsonist = require('jsonist');

const PORT = (process.env.PORT = process.env.PORT || require('get-PORT-sync')());
const server = require('./server');

const urlBase = `http://localhost:${PORT}`;

tape('should respond hello', (t) => {
	jsonist.get(urlBase, (err, body) => {
		if (err) t.error(err);

		t.equal(body.msg, 'hello');
		t.end();
	});
});

tape('should respond b64', (t) => {
	jsonist.get(`${urlBase}/b64/hello`, (err, body) => {
		if (err) t.error(err);

		t.equal(body.b64, 'aGVsbG8=');
		t.end();
	});
});
tape('should respond user-agent', (t) => {



	const opts = { headers: { 'User-Agent': 'tape' } };
	jsonist.get(`${urlBase}/user-agent`, opts, (err, body) => {
		if (err) t.error(err);

		t.equal(body.ua, 'tape');
		t.end();
	});
});

tape('cleanup', function(t) {
	server.close();
	t.end();
});
const name = 'Jeff';
const sth = "This was added when I was creating GIT103 video";
const name = 'Mirriam';
const name = "Makokha";
const name = "Okacha";
const name = "NG'ETHE__THEE"
const name = "again"
const name = "Hellen";
const name = "Jeff";
const name = "NG'ETHE__THEE" ;
const name = "again";
const name = "Hellen";
const name = "abc" ;
const name = "xyz";
const name = "wazzup";
const name = "test";

