var exists = require('fs').existsSync;
var extname = require('path').extname;
var lame = __dirname + '/lame';
var spawn = require('child_process').spawn;

module.exports = function(src, dest, cb) {
  if (arguments.length == 2 && typeof dest == 'function') {
    cb = dest;
    dest = src.substr(0, src.length - extname(src).length) + '.mp3';
  }
  if (!exists(src)) {
    cb(new Error('lame-osx: source not found'));
    return;
  }

  var child = spawn(lame, ['-V0', '-b', '160', src, dest]);

  child.stderr.on('data', function(buf) {
    process.stdout.write(String(buf));
  });
  child.on('close', function(code) {
    if (code != 0) var err = new Error('lame-osx: encoding error');
    cb(err || null);
  });
}
