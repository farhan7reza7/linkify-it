#!/usr/bin/env node

import shell from 'shelljs';

shell.rm('-rf', 'demo');
shell.mkdir('demo');

shell.exec('support/demodata.js > support/demo_template/sample.json');

shell.exec('node_modules/.bin/pug support/demo_template/index.pug --pretty \
--obj support/demo_template/sample.json \
--out demo');

shell.exec('node_modules/.bin/stylus -u autoprefixer-stylus \
< ./support/demo_template/index.styl \
> ./demo/index.css');

shell.rm('-rf', 'support/demo_template/sample.json');

shell.exec('node_modules/.bin/browserify ./support/demo_template/index.js \
> ./demo/index.js');
