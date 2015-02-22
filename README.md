*DEPRECATION NOTICE*: This project is no longer maintained.

# Connect Spawn

## Installation

    $ npm install connect-spawn

## Examples

The _spawn_ middleware executes a child process on request and responds with the output:

	  connect.createServer(
	      require('connect-spawn')('ls', ['-Al'], { cwd: __dirname })
	  );

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/shannonmoeller/connect-spawn/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
