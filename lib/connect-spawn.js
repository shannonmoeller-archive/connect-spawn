var spawn = require('child_process').spawn;

module.exports = function (cmd, args, opts) {
	return function (req, res) {
		var i, proc = spawn(cmd, args, opts);

		proc.stdout.on('data', function (data) {
			res.statusCode = 200;
			res.write(data);
		});

		proc.stderr.on('data', function (data) {
			res.statusCode = 500;
			res.end(data);
		});

		proc.on('exit', function (code) {
			res.end();
		});
	};
};
