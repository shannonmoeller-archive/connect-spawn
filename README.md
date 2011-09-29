# Connect Spawn

## Installation

    $ npm install connect-spawn

## Examples

The _spawn_ middleware provides a means of executing a child process for a request and responding with the output:

	  connect.createServer(
	      require('connect-spawn')('ls', ['-Al'], { cwd: __dirname })
	  );
