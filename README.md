[![build status](https://secure.travis-ci.org/shannonmoeller/connect-spawn.png)](http://travis-ci.org/shannonmoeller/connect-spawn)
# Connect Spawn

## Installation

    $ npm install connect-spawn

## Examples

The _spawn_ middleware executes a child process on request and responds with the output:

	  connect.createServer(
	      require('connect-spawn')('ls', ['-Al'], { cwd: __dirname })
	  );
