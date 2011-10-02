var spawn = require('child_process').spawn;

module.exports = function (cmd, args, opts) {
	var headers = opts && opts.headers,
		statusCode = opts && opts.statusCode;

	return function (req, res) {
		var i, proc = spawn(cmd, args, opts);

		if (headers) {
			for (i in headers) {
				if (headers.hasOwnProperty(i)) {
					res.setHeader(i, headers[i]);
				}
			}
		}

		proc.stdout.on('data', function (data) {
			res.statusCode = statusCode || 200;
			res.write(data);
		});

		proc.stderr.on('data', function (data) {
			res.statusCode = statusCode || 500;
			res.end(data);
		});

		proc.on('exit', function (code) {
			res.end();
		});
	};
};
