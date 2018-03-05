#!/usr/bin/env node

const fs = require('fs');

const yargs = require('yargs');

const contentGenerator = require('./fileContents')

const argv = yargs.command('create <name>', 'create a new component', (yargs) => {
    yargs.positional('name', {
      describe: 'Name of the new component',
      type: 'string',
      default: ''
    })
  })
  .help()
  .argv;

const contents = contentGenerator(argv.name);

fs.writeFile(`${argv.name}.spec.js`, contents.spec, (err) => {
  if (err) console.error(err);
});

fs.writeFile(`${argv.name}.js`, contents.component, (err) => {
  if (err) console.error(err);
});
