
var sass = require('./tasks/sass.js'),
	watch = require('./tasks/watch.js'),
	connect = require('./tasks/connect.js'),
	serve = require('./tasks/serve.js'),
	open = require('./tasks/open.js');

sass();
watch();
connect();
open();
serve();
